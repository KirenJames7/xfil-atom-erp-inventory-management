<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    const TBL_FEATURE = "tbl_feature";
    const TBL_USER = "tbl_user";
    const TBL_NUMBER_SEQUENCE = "tbl_number_sequence";
    const TBL_ITEM_TYPE = "tbl_item_type";
    const TBL_UNIT_OF_MEASURE = "tbl_unit_of_measure";
    const TBL_ITEM_UNIT_OF_MEASURE = "tbl_item_unit_of_measure";
    const TBL_FIXED_ASSET_REGISTER = "tbl_fixed_asset_register";
    const TBL_FIXED_ASSET_CATEGORY = "tbl_fixed_asset_category";
    const TBL_FIXED_ASSET_ATTRIBUTE = "tbl_fixed_asset_attribute";
    const TBL_FIXED_ASSET_REGISTER_ATTRIBUTE_VALUE = "tbl_fixed_asset_register_attribute_value";
    const TBL_FIXED_ASSET_ITEM = "tbl_fixed_asset_item";
    const TBL_FIXED_ASSET_TRANSACTION = "tbl_fixed_asset_transaction";
    const TBL_FIXED_ASSET_TRANSACTION_STATUS = "tbl_fixed_asset_transaction_status";
    const TBL_ITEM = "tbl_item";
    const TBL_ITEM_TRANSACTION = "tbl_item_transaction";
    const TBL_ITEM_TRANSACTION_STATUS = "tbl_item_transaction_status";
    const TBL_SERVICE_TRANSACTION = "tbl_service_transaction";
    const TBL_SERVICE_TRANSACTION_STATUS = "tbl_service_transaction_status";
    
    protected $tables = [];
    private $api_data = [];


    public function __construct() {
        //get list of all tables
        $dbtable = DB::select('SHOW TABLES');
        //build array containing all schema tables
        foreach ($dbtable as $value) {
            $table = [];
            //push table name
            array_push($table, $value->Tables_in_inventory_management);
            //get all columns of table
            $tablecolumns = DB::select('SHOW COLUMNS FROM ' . $value->Tables_in_inventory_management);
            $columns = [];
            foreach ($tablecolumns as $column) {
                //push column name
                array_push($columns, $column->Field);
            }
            //push columns to the table array
            array_push($table, $columns);
            //create a key value pairing to the tables & columns
            $this->tables["$value->Tables_in_inventory_management"] = $table;
        }
    }
    
    //generate a key value pair API from a given data set key & value depends on which record should be key and value
    public function apiGenerator($data, $key, $value) {
        //iterate through records and convert API 
        foreach ($data as $data_record){
            if(is_array($data_record)){
                //if API response contains multiple records
                //convert array to index array
                $temp = array_values($data_record);
                //assign key value pair
                $this->api_data[$temp[$key]] = $temp[$value];
            }else{
                //if API response contains a single record
                //convert array to index array
                $temp = array_values($data);
                //assign key value pair
                $this->api_data[$temp[$key]] = $temp[$value];
                //break out of loop as this is a single record
                break;
            }
        }
        return $this->api_data;
    }
    
    public function getFLAPIUrl() {
        return response()->json([ "url" => env('APP_FL_API') ]);
    }
    
    public function getAPAPIUrl() {
        return response()->json([ "url" => env('APP_AP_API') ]);
    }
    
}
