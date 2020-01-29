<?php

namespace App\Http\Controllers\FixedAsset;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FixedAssetAttributeController extends Controller
{
    protected $fixed_asset_attribute_sql = [];
    protected $fixed_asset_category_attributes;

    const FIXED_ASSET_ATTRIBUTE_VALUE_JOIN = "fixed_asset_attribute_value_join";
    
    public function listFixedAssetCategoryFixedAssetAttributes(Request $request) {
        $this->fixed_asset_category_attributes = $this->getFixedAssetCategoryFixedAssetAttributes($request->category, $request->company);
        return response()->json([ "fixed_asset_attributes" => $this->fixed_asset_category_attributes ]);
    }
    
    public function listFixedAssetCategoryFixedAssetAttributesAPI(Request $request) {
        $this->getFixedAssetCategoryFixedAssetAttributesAPI($request->category, $request->company);
        return response()->json([ "fixed_asset_attributes" => $this->fixed_asset_category_attributes ]);
    }

    public function getFixedAssetCategoryFixedAssetAttributes($fixed_asset_category, $company) {
        return DB::table( $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0] )
            ->where( [ [ $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][5], $company ], [ $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][1], $fixed_asset_category ] ] )
            ->orderBy( $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][0], "asc" )
            ->pluck( $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][2] );
    }
    
    public function getFixedAssetCategoryFixedAssetAttributesAPI($fixed_asset_category, $company) {
        $this->fixed_asset_category_attributes = DB::table( $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0], $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][0], "=", $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][1] )
            ->where( [ [ $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][4], $company ], [ $this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][0].".".$this->tables[ self::TBL_FIXED_ASSET_CATEGORY ][1][1], $fixed_asset_category ], [ $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][3], 1 ] ] )
            ->orderBy( $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][0], "asc" )
            ->pluck( $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][2] );
    }
    
    public function getFixedAssetAttributeSelect($fixed_asset_category, $company) {
        foreach ( $this->getFixedAssetCategoryFixedAssetAttributes($fixed_asset_category, $company) as $attribute ) {
            array_push($this->fixed_asset_attribute_sql, self::FIXED_ASSET_ATTRIBUTE_VALUE_JOIN.".".str_replace(" ", "_", $attribute));
        }
        return $this->fixed_asset_attribute_sql;
    }
}
