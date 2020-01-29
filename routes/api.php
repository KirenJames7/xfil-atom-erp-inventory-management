<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('v1/itemdetails', [ 'middleware' => 'cors', 'uses' => 'Item\ItemController@listAllItemDetailsAPI' ]);

Route::get('v1/itemuom', [ 'middleware' => 'cors', 'uses' => 'Item\ItemUnitOfMeasureController@listItemUnitOfMeasureAPI' ]);

Route::get('v1/fixedassetattributes', [ 'middleware' => 'cors', 'uses' => 'FixedAsset\FixedAssetAttributeController@listFixedAssetCategoryFixedAssetAttributesAPI' ]);