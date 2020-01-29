<?php

namespace App\Http\Controllers\Item;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ItemTypeController extends Controller
{
    protected $item_types;
    
    public function listAllItemTypes() {
        $this->getAllItemTypes();
        return response()->json([ "item_types" => $this->item_types ]);
    }
    
    public function getAllItemTypes() {
        $this->item_types = DB::table( $this->tables[ self::TBL_ITEM_TYPE ][0] )->get();
    }
}
