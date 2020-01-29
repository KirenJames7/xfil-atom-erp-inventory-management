<?php

namespace App\Http\Controllers\FixedAsset;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FixedAsset\FixedAssetAttributeController;
use Illuminate\Support\Facades\DB;

class FixedAssetRegisterAttributeValueController extends Controller
{
    protected $fixed_asset_attribute;
    protected $fixed_asset_attribute_value_sql = [];
    
    public function __construct() {
        parent::__construct();
        $this->fixed_asset_attribute = new FixedAssetAttributeController();
    }
    
    public function getFixedAssetAttributeValueSelect($fixed_asset_category, $company) {
        foreach ( $this->fixed_asset_attribute->getFixedAssetCategoryFixedAssetAttributes($fixed_asset_category, $company) as $attribute ) {
            array_push($this->fixed_asset_attribute_value_sql, "MAX("."CASE WHEN ".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][2]."="."'".$attribute."'"." THEN ".$this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][1][3]." ELSE NULL END)"." AS ".str_replace(" ", "_", $attribute));
        }
        return $this->fixed_asset_attribute_value_sql;
    }

    public function getFixedAssetAttributeValue($fixed_asset_category, $fixed_asset_item, $company) {
        return DB::table( $this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0], $this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][1][2], "=", $this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_ATTRIBUTE ][1][0] )
            ->join( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0], $this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][1][1], "=", $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][0] )
            ->select(
                $this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][1][1],
                DB::raw(implode(",", $this->getFixedAssetAttributeValueSelect($fixed_asset_category, $company)))
            )
            ->whereIn( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][1], is_array(json_decode(json_encode($fixed_asset_item, true), true)) ? count(json_decode(json_encode($fixed_asset_item, true), true)) ? $fixed_asset_item : [ null ] : [ $fixed_asset_item ] )
            ->where( $this->tables[ self::TBL_FIXED_ASSET_REGISTER ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER ][1][3], $company )
            ->groupBy( $this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][1][1] )
            ->orderBy( $this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][0].".".$this->tables[ self::TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE ][1][1] );
    }
}