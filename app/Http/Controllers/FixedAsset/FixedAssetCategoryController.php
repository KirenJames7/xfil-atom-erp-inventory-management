<?php

namespace App\Http\Controllers\FixedAsset;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FixedAssetCategoryController extends Controller
{
    protected $fixed_asset_categories;
    
    public function listAllFixedAssetCategories(Request $request) {
        $this->getAllFixedAssetCategories($request->company);
        return response()->json([ "fixed_asset_categories" => $this->fixed_asset_categories ]);
    }
    
    public function getAllFixedAssetCategories($company) {
        $this->fixed_asset_categories = DB::table( $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0] )->select( $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][0], $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][1], $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][2] )->where( $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][4], $company )->get();
    }
    
    public function getFixedAssetCategoryItems($category, $company) {
        return DB::table( $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0] )->join( $this->tables[ self::TBL_ITEM ][0], $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][0], "=", $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][4] )->where( [ [ $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][0], $category ], [ $this->tables[self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][6], $company ] ] )->pluck( $this->tables[ self::TBL_ITEM ][0].".".$this->tables[ self::TBL_ITEM ][1][0] );
    }
}