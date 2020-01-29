<?php

namespace App\Http\Controllers\Item;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\FixedAsset\FixedAssetTransactionController;

class ItemTransactionController extends Controller
{
    protected $fixed_asset_transaction;

    const ON_HAND_ITEM = "on_hand_item";
    const ON_HAND = "on_hand";
    
    public function __construct() {
        parent::__construct();
        $this->fixed_asset_transaction = new FixedAssetTransactionController();
    }

    public function getItemOnHandUnionFixedAssetOnHand($company) {
        return DB::table( $this->tables[ self::TBL_ITEM_TRANSACTION ][0] )
            ->join( $this->tables[ self::TBL_ITEM_TRANSACTION_STATUS ][0], $this->tables[ self::TBL_ITEM_TRANSACTION ][0].".".$this->tables[ self::TBL_ITEM_TRANSACTION ][1][8], "=", $this->tables[ self::TBL_ITEM_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_ITEM_TRANSACTION_STATUS ][1][0] )
            ->select( $this->tables[ self::TBL_ITEM_TRANSACTION ][0].".".$this->tables[ self::TBL_ITEM_TRANSACTION ][1][5]." AS ".self::ON_HAND_ITEM, DB::raw("SUM(".$this->tables[ self::TBL_ITEM_TRANSACTION ][0].".".$this->tables[ self::TBL_ITEM_TRANSACTION ][1][10].")"." AS ".self::ON_HAND) )
            ->whereIn( $this->tables[ self::TBL_ITEM_TRANSACTION_STATUS ][0].".".$this->tables[self::TBL_ITEM_TRANSACTION_STATUS ][1][1], [ "ON HAND", "ISSUED", "DISCARDED","RECEIVED" ] )
            ->groupBy( $this->tables[ self::TBL_ITEM_TRANSACTION ][0].".".$this->tables[ self::TBL_ITEM_TRANSACTION ][1][5] )
            ->unionAll( $this->fixed_asset_transaction->getFixedAssetOnHand($company) );
    }
    
    public function getItemTransactionExists($item, $company) {
        return DB::table( $this->tables[ self::TBL_ITEM_TRANSACTION ][0] )->where( [ [ $this->tables[ self::TBL_ITEM_TRANSACTION ][1][5], $item ], [ $this->tables[ self::TBL_ITEM_TRANSACTION ][1][13], $company ] ] )->exits();
    }
    
    public function checkItemTransactionExists($item, $company) {
        if ( $this->getItemTransactionExists($item, $company) ) {
            return response()->json([ "exists" => true ]);
        } else {
            return response()->json([ "exists" => false ]);
        }
    }
}
