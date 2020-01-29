<?php

namespace App\Http\Controllers\Item;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Item\ItemTransactionController;
use App\Http\Controllers\FixedAsset\FixedAssetRegisterController;
use App\Http\Controllers\Service\ServiceTransactionController;
use App\Http\Controllers\Item\ItemUnitOfMeasureController;

class ItemController extends Controller
{
    protected $items;
    protected $item_details;
    protected $item_transaction;
    protected $fixed_asset_register;
    protected $service_transaction;
    protected $item_unit_of_measure;
    protected $new_item;

    const ASSET_ON_HAND_JOIN = "asset_on_hand_join";
    const ON_HAND_ITEM = "on_hand_item";
    const ON_HAND = "on_hand";
    
    public function __construct() {
        parent::__construct();
        $this->item_transaction = new ItemTransactionController();
        $this->item_unit_of_measure = new ItemUnitOfMeasureController();
        //$this->fixed_asset_register = new FixedAssetRegisterController();
        //$this->service_transaction = new ServiceTransactionController();
    }

    public function listAllItemDetailsAPI(Request $request) {
        $this->getAllItemDetailsAPI($request->company);
        return response()->json([ "items" => $this->items ]);
    }
    
    public function listAllItemDetails(Request $request) {
        $this->getAllItemDetails($request->company);
        return response()->json([ "item_details" => $this->item_details ]);
    }
    
    public function getAllItemDetailsAPI($company) {
        $this->items = DB::table( $this->tables[ self::TBL_ITEM ][0] )
            ->join( $this->tables[ self::TBL_ITEM_TYPE ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][3], "=", $this->tables[ self::TBL_ITEM_TYPE ][0].".".$this->tables[ self::TBL_ITEM_TYPE ][1][0] )
            ->leftJoin( $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][4], "=", $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][0] )
            ->join( $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][0], "=", $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][1] )
            ->join( $this->tables[ self::TBL_UNIT_OF_MEASURE ][0], $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][2], "=", $this->tables[ self::TBL_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_UNIT_OF_MEASURE ][1][0] )
            ->select( $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][1], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][2], $this->tables[ self::TBL_ITEM_TYPE ][0].".".$this->tables[ self::TBL_ITEM_TYPE ][1][1], DB::raw( "IFNULL"."(".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][1].","."''".")"." AS ".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][1]), $this->tables[ self::TBL_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_UNIT_OF_MEASURE ][1][1] )
            ->where( [ [ $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][6], $company ], [ $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][3], 1 ] ] )
            ->orderBy( $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][1], "ASC" )
            ->get();
    }
    
    public function getAllItemDetails($company) {
        $this->item_details = DB::table( $this->tables[ self::TBL_ITEM ][0] )
            ->join( $this->tables[ self::TBL_ITEM_TYPE ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][3], "=", $this->tables[ self::TBL_ITEM_TYPE ][0].".".$this->tables[ self::TBL_ITEM_TYPE ][1][0] )
            ->leftJoin( $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][4], "=", $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][0] )
            ->join( $this->tables[ self::TBL_USER ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][5], "=", $this->tables[ self::TBL_USER ][0].".".$this->tables[ self::TBL_USER ][1][0] )
            ->join( $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][0], "=", $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][1] )
            ->join( $this->tables[ self::TBL_UNIT_OF_MEASURE ][0], $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][2], "=", $this->tables[ self::TBL_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_UNIT_OF_MEASURE ][1][0] )
            ->leftJoinSub( $this->item_transaction->getItemOnHandUnionFixedAssetOnHand($company), self::ASSET_ON_HAND_JOIN, function ($join) {
                $join->on( $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][0], "=", self::ASSET_ON_HAND_JOIN.".".self::ON_HAND_ITEM );
            })
            ->select( $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][1], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][2], $this->tables[ self::TBL_ITEM_TYPE ][0].".".$this->tables[ self::TBL_ITEM_TYPE ][1][1], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][4], $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][1], $this->tables[ self::TBL_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_UNIT_OF_MEASURE ][1][1], $this->tables[ self::TBL_USER ][0].".".$this->tables[ self::TBL_USER ][1][1], self::ASSET_ON_HAND_JOIN.".".self::ON_HAND )
            ->where( [ [ $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][6], $company ], [ $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][3], 1 ] ] )
            ->orderBy( $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][1], "ASC" )
            ->get();
    }
    
    public function getItemCategory($item, $company) {
        return DB::table( $this->tables[ self::TBL_ITEM ][0] )->where( [ [ $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][0], $item ], [ $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][6], $company ] ] )->pluck( $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][4] );
    }
    
    public function getItemCodes($company) {
        return DB::table( $this->tables[ self::TBL_ITEM ][0] )->where( $this->tables[ self::TBL_ITEM ][1][6], $company )->pluck( $this->tables[ self::TBL_ITEM ][1][1] );
    }
    
    public function checkItemCodeValidity(Request $request) {
        if ( empty($request->get('item_code')) ) {
            return response()->json([ "empty" => true ]);
        }
        foreach ($this->getItemCodes($request->company) as $item ) {
            if ( $item === $request->get('item_code') ) {
                return response()->json([ "valid" => false ]);
            }
        }
        return response()->json([ "valid" => true ]);
    }
    
    public function insertItem() {
        return DB::table( $this->tables[ self::TBL_ITEM ][0] )->insertGetId( $this->new_item );
    }
    
    public function isFixedAssetItem($request) {
        $this->new_item = array(
            "item_code" => $request->get('item-code'),
            "item_descripsion" => $request->get('item-descripsion'),
            "item_type" => $request->get('item-type'),
            "item_created_by" => $request->userid,
            "item_company" => $request->company
        );
        if ( $request->get('fixed-asset-category') ) {
            $this->new_item["fixed_asset_category"] = $request->get('fixed-asset-category');
        }
    }
    
    public function itemCreation(Request $request) {
        $this->isFixedAssetItem($request);
        if ( $this->item_unit_of_measure->insertItemUnitOfMeasure([ "item" => $this->insertItem(), "unit_of_measure" => $request->get("item-unit-of-measure"), "base_unit_of_measure" => 1 ]) ) {
            return response()->json([ "created" => true, "item_code" => $request->get('item-code') ]);
        } else {
            return response()->json([ "created" => false ]);
        }
    }
    
    public function checkItemTransactionExists(Request $request) {
        switch ( $request->fixed_asset_category ) {
            case "FA": {
                return $this->fixed_asset_register->checkFixedAssetRegisterExists($request->item_id, $request->company);
            }
            break;
            case "CA": {
                return $this->item_transaction->checkItemTransactionExists($request->item_id, $request->company);
            }
            break;
            case "SER": {
                return $this->service_transaction->checkServiceTransactionExists($request->item_id, $request->company);
            }
            break;
        }
    }
}