<?php

namespace App\Http\Controllers\FixedAsset;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Item\ItemController;
use App\Http\Controllers\FixedAsset\FixedAssetCategoryController;
use App\Http\Controllers\FixedAsset\FixedAssetAttributeController;
use App\Http\Controllers\FixedAsset\FixedAssetTransactionController;
use App\Http\Controllers\FixedAsset\FixedAssetRegisterAttributeValueController;
use Illuminate\Support\Facades\DB;

class FixedAssetRegisterController extends Controller
{
    protected $item;
    protected $fixed_asset_category;
    protected $fixed_asset_attribute;
    protected $fixed_asset_transaction;
    protected $fixed_asset_register_attribute_value;
    protected $item_fixed_asset_register;
    protected $fixed_asset_category_fixed_asset_register;
    
    const CURRENT_FIXED_ASSET_STATUS_JOIN = "current_fixed_asset_status_join";
    const FIXED_ASSET = "fixed_asset";
    const FIXED_ASSET_ATTRIBUTE_VALUE_JOIN = "fixed_asset_attribute_value_join";
    const FIXED_ASSET_RECEIVED_DATE_JOIN = "fixed_asset_received_date_join";
    const FIXED_ASSET_ISSUED_DATE_JOIN = "fixed_asset_issued_date_join";
    const RECEIVED_DATE = "received_date";
    const ISSUED_DATE = "issued_date";
    
    public function __construct() {
        parent::__construct();
        $this->item = new ItemController();
        $this->fixed_asset_category = new FixedAssetCategoryController();
        $this->fixed_asset_attribute = new FixedAssetAttributeController();
        $this->fixed_asset_transaction = new FixedAssetTransactionController();
        $this->fixed_asset_register_attribute_value = new FixedAssetRegisterAttributeValueController();
    }

    public function listItemFixedAssetRegister(Request $request) {
        $this->getItemFixedAssetRegister($request->item_id, $request->company);
        return response()->json([ "item_fixed_asset_register" => $this->item_fixed_asset_register ]);
    }
    
    public function listFixedAssetCategoryFixedAssetRegister(Request $request) {
        //$this->fixed_asset_category->getFixedAssetCategoryItems($category, $company);
        //$this->fixed_asset_attribute->getFixedAssetCategoryFixedAssetAttributes($category, $company);
        $this->getFixedAssetCategoryFixedAssetRegister($request->category, $request->company);
        return response()->json([ "category_fixed_asset_register" => $this->fixed_asset_category_fixed_asset_register ]);
    }
    
    public function getItemFixedAssetRegister($item, $company) {
        $this->item_fixed_asset_register = DB::table( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0] )
                ->joinSub( $this->fixed_asset_transaction->getCurrentFixedAssetStatus($company), self::CURRENT_FIXED_ASSET_STATUS_JOIN, function ($join) {
                    $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::CURRENT_FIXED_ASSET_STATUS_JOIN.".".self::FIXED_ASSET );
                })
                ->joinSub( $this->fixed_asset_register_attribute_value->getFixedAssetAttributeValue($this->item->getItemCategory($item, $company), $item, $company), self::FIXED_ASSET_ATTRIBUTE_VALUE_JOIN, function ($join) {
                    $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::FIXED_ASSET_ATTRIBUTE_VALUE_JOIN.".".self::FIXED_ASSET );
                })
                ->joinSub( $this->fixed_asset_transaction->getFixedAssetReceivedDate($company), self::FIXED_ASSET_RECEIVED_DATE_JOIN, function ($join) {
                    $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::FIXED_ASSET_RECEIVED_DATE_JOIN.".".self::FIXED_ASSET );
                })
                ->leftJoinSub( $this->fixed_asset_transaction->getFixedAssetIssuedDate($company), self::FIXED_ASSET_ISSUED_DATE_JOIN, function ($join) {
                    $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::FIXED_ASSET_ISSUED_DATE_JOIN.".".self::FIXED_ASSET);
                })
                ->select( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][2], DB::raw(implode(",", $this->fixed_asset_attribute->getFixedAssetAttributeSelect($this->item->getItemCategory($item, $company), $company))), self::CURRENT_FIXED_ASSET_STATUS_JOIN.".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][1], self::FIXED_ASSET_RECEIVED_DATE_JOIN.".".self::RECEIVED_DATE, self::FIXED_ASSET_ISSUED_DATE_JOIN.".".self::ISSUED_DATE )
                ->where( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1], $item )
                ->orderBy( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "asc" )
                ->get();
    }
    
    public function getFixedAssetCategoryFixedAssetRegister($category, $company) {
        $this->fixed_asset_category_fixed_asset_register = DB::table( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0] )
            ->joinSub( $this->fixed_asset_transaction->getCurrentFixedAssetStatus($company), self::CURRENT_FIXED_ASSET_STATUS_JOIN, function ($join) {
                $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::CURRENT_FIXED_ASSET_STATUS_JOIN.".".self::FIXED_ASSET );
            })
            ->joinSub( $this->fixed_asset_register_attribute_value->getFixedAssetAttributeValue($category, $this->fixed_asset_category->getFixedAssetCategoryItems($category, $company), $company), self::FIXED_ASSET_ATTRIBUTE_VALUE_JOIN, function ($join) {
                $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::FIXED_ASSET_ATTRIBUTE_VALUE_JOIN.".".self::FIXED_ASSET );
            })
            ->joinSub( $this->fixed_asset_transaction->getFixedAssetReceivedDate($company), self::FIXED_ASSET_RECEIVED_DATE_JOIN, function ($join) {
                $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::FIXED_ASSET_RECEIVED_DATE_JOIN.".".self::FIXED_ASSET );
            })
            ->leftJoinSub( $this->fixed_asset_transaction->getFixedAssetIssuedDate($company), self::FIXED_ASSET_ISSUED_DATE_JOIN, function ($join) {
                $join->on( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "=", self::FIXED_ASSET_ISSUED_DATE_JOIN.".".self::FIXED_ASSET);
            })
            ->select( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][2], DB::raw(implode(",", $this->fixed_asset_attribute->getFixedAssetAttributeSelect($category, $company))), self::CURRENT_FIXED_ASSET_STATUS_JOIN.".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][1], self::FIXED_ASSET_RECEIVED_DATE_JOIN.".".self::RECEIVED_DATE, self::FIXED_ASSET_ISSUED_DATE_JOIN.".".self::ISSUED_DATE )
            ->whereIn( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1], count($this->fixed_asset_category->getFixedAssetCategoryItems($category, $company)) ? $this->fixed_asset_category->getFixedAssetCategoryItems($category, $company): [ null ] )
            ->orderBy( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0], "asc" )
            ->get();
    }
    
    public function getFixedAssetRegisterExists($item, $company) {
        return DB::table( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0] )->where( [ [ $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1], $item ], [ $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][3], $company ] ] )->exists();
    }
    
    public function checkFixedAssetRegisterExists($item, $company) {
        if ( $this->getFixedAssetRegisterExists($item, $company) ) {
            return response()->json([ "exists" => true ]);
        } else {
            return response()->json([ "exists" => false ]);
        }
    }
}