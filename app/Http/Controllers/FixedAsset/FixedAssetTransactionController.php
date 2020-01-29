<?php

namespace App\Http\Controllers\FixedAsset;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FixedAssetTransactionController extends Controller
{
    const LASTEST_ID = "latest_id";
    const LASTEST_RECORD = "latest_record";
    const LATEST_FIXED_ASSET_TRANSACTIONS = "latest_fixed_asset_transactions";
    const CURRENT_FIXED_ASSET_STATUS = "current_fixed_asset_status";
    const ON_HAND_ITEM = "on_hand_item";
    const ON_HAND = "on_hand";
    const RECEIVED_DATE = "received_date";
    const ISSUED_DATE = "issued_date";
    
    public function getLatestFixedAssetTransactions($company) {
        return DB::table( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0] )
            ->select( DB::raw("MAX(".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][0].")"." AS ".self::LASTEST_ID), DB::raw("MAX(".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][1].")"." AS ".self::LASTEST_RECORD), $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5] )
            ->where( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][12], $company )
            ->groupBy( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5] );
    }
    
    public function getCurrentFixedAssetStatus($company) {
        return DB::table( DB::raw( "(".$this->getLatestFixedAssetTransactions($company)->toSql().")"." AS ".self::LATEST_FIXED_ASSET_TRANSACTIONS ) )
            ->addBinding( $this->getLatestFixedAssetTransactions($company)->getBindings(), "select" )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0], self::LATEST_FIXED_ASSET_TRANSACTIONS.".".self::LASTEST_ID, "=", $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0], $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][9], "=", $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][0] )
            ->select( self::LATEST_FIXED_ASSET_TRANSACTIONS.".".self::LASTEST_RECORD, self::LATEST_FIXED_ASSET_TRANSACTIONS.".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5], $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][1] );
    }
    
    public function getCurrentFixedAssetStatusItem($company) {
        return DB::table( DB::raw( "(".$this->getLatestFixedAssetTransactions($company)->toSql().")"." AS ".self::LATEST_FIXED_ASSET_TRANSACTIONS ) )
            ->addBinding( $this->getLatestFixedAssetTransactions($company)->getBindings(), "select" )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0], self::LATEST_FIXED_ASSET_TRANSACTIONS.".".self::LASTEST_ID, "=", $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0], $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][9], "=", $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0], $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5], "=", $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0] )
            ->select( self::LATEST_FIXED_ASSET_TRANSACTIONS.".".self::LASTEST_RECORD, self::LATEST_FIXED_ASSET_TRANSACTIONS.".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5], $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][1], $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1] );
    }
    
    public function getFixedAssetOnHand($company) {
        return DB::table( DB::raw( "(".$this->getCurrentFixedAssetStatusItem($company)->toSql().")"." AS ".self::CURRENT_FIXED_ASSET_STATUS ) )
            ->addBinding( $this->getCurrentFixedAssetStatusItem($company)->getBindings(), "select" )
            ->select( self::CURRENT_FIXED_ASSET_STATUS.".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1]." AS ".self::ON_HAND_ITEM, DB::raw("COUNT(".self::CURRENT_FIXED_ASSET_STATUS.".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1].")"." AS ".self::ON_HAND) )
            ->where( self::CURRENT_FIXED_ASSET_STATUS.".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][1], "RECEIVED" )
            ->groupBy( self::CURRENT_FIXED_ASSET_STATUS.".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1] );
    }
    
    public function getFixedAssetReceivedDate($company) {
        return DB::table( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0], $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][9], "=", $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][0] )
            ->select( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5], DB::raw( "DATE("."MIN(".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION][1][1].")".")"." AS ".self::RECEIVED_DATE ) )
            ->where( [ [ $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][1], "RECEIVED" ], [ $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][12], $company ] ] )
            ->groupBy( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5] );
    }
    
    public function getFixedAssetIssuedDate($company) {
        return DB::table( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0], $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][9], "=", $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][0] )
            ->select( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5], DB::raw( "DATE("."MAX(".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION][1][1].")".")"." AS ".self::ISSUED_DATE) )
            ->where( [ [ $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION_STATUS ][1][1], "ALLOCATED" ], [ $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][12], $company ] ] )
            ->groupBy( $this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][0].".".$this->tables[ self::TBL_FIXED_ASSET_TRANSACTION ][1][5] );
    }
}