<?php

namespace App\Http\Controllers\UnitOfMeasure;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UnitOfMeasureController extends Controller
{
    protected $units_of_measure;

    public function listAllUnitsOfMeasure() {
        $this->getAllUnitsOfMeasure();
        return response()->json([ "units_of_measure" => $this->units_of_measure ]);
    }
    
    public function getAllUnitsOfMeasure() {
        $this->units_of_measure = DB::table( $this->tables[ self::TBL_UNIT_OF_MEASURE ][0] )->get();
    }
    
    //items unit of measure
    
    public function insertUnitOfMeasure() {
        
    }
}
