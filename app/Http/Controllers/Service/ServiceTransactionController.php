<?php

namespace App\Http\Controllers\Service;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceTransactionController extends Controller
{
    public function getServiceTransactionExists($item, $company) {
        return DB::table( $this->tables[ self::TBL_ITEM_TRANSACTION ][0] )->where( [ [ $this->tables[ self::TBL_ITEM_TRANSACTION ][1][5], $item ], [ $this->tables[ self::TBL_ITEM_TRANSACTION ][1][10], $company ] ] )->exits();
    }
    
    public function checkServiceTransactionExists($item, $company) {
        if ( $this->getServiceTransactionExists($item, $company) ) {
            return response()->json([ "exists" => true ]);
        } else {
            return response()->json([ "exists" => false ]);
        }
    }
}
