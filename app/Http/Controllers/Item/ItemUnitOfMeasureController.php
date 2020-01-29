<?php

namespace App\Http\Controllers\Item;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ItemUnitOfMeasureController extends Controller
{
    protected $item_unit_of_measure;
    
    public function listItemUnitOfMeasureAPI(Request $request) {
        $this->getItemUnitOfMeasureAPI($request->company, $request->item);
        return response()->json([ "item_unit_of_measure" => $this->item_unit_of_measure ]);
    }
    
    public function getItemUnitOfMeasureAPI($company, $item) {
        $this->item_unit_of_measure = DB::table( $this->tables[ self::TBL_ITEM ][0] )
                ->join( $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0], $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][0], "=", $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][1] )
                ->join( $this->tables[ self::TBL_UNIT_OF_MEASURE ][0], $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][1][2], "=", $this->tables[ self::TBL_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_UNIT_OF_MEASURE ][1][0] )
                ->select( $this->tables[ self::TBL_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_UNIT_OF_MEASURE ][1][1], $this->tables[ self::TBL_UNIT_OF_MEASURE ][0].".".$this->tables[ self::TBL_UNIT_OF_MEASURE ][1][2] )
                ->where( [ [ $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][6], $company ], [ $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][1], $item ] ] )
                ->get();
    }
    
    public function insertItemUnitOfMeasure($item_unit_of_measure) {
        return DB::table( $this->tables[ self::TBL_ITEM_UNIT_OF_MEASURE ][0] )->insert($item_unit_of_measure);
    }
}