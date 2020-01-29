<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app.index');
});

Route::get('apifl', 'Controller@getFLAPIUrl')->middleware('ajax');

Route::get('apiap', 'Controller@getAPAPIUrl')->middleware('ajax');

Route::post('authenticate', 'LDAPAuth\User\UserController@userSignIn')->middleware('ajax');

Route::post('unauthenticate', 'LDAPAuth\User\UserController@userSignOut')->middleware('ajax');

Route::get('checkactivesession', 'LDAPAuth\User\UserController@userSessionActiveCheck')->middleware('ajax');

Route::get('features', 'Feature\FeatureController@getFeatures')->middleware('ajax');

Route::get('numbers', 'NumberSequence\NumberSequenceController@generateNewNumber');

Route::get('numbersdoc', 'NumberSequence\NumberSequenceController@generateNewDocumentNumber');

Route::get('itemtypes', 'Item\ItemTypeController@listAllItemTypes')->middleware('ajax');

Route::get('unitsofmeasure', 'UnitOfMeasure\UnitOfMeasureController@listAllUnitsOfMeasure')->middleware('ajax');

Route::get('itemdetails', 'Item\ItemController@listAllItemDetails')->middleware('ajax');

Route::get('itemcodevalidity', 'Item\ItemController@checkItemCodeValidity')->middleware('ajax');

Route::post('itemcreation', 'Item\ItemController@itemCreation')->middleware('ajax');

Route::get('fixedassetcategories', 'FixedAsset\FixedAssetCategoryController@listAllFixedAssetCategories')->middleware('ajax');

Route::get('fixedassetattributes', 'FixedAsset\FixedAssetAttributeController@listFixedAssetCategoryFixedAssetAttributes')->middleware('ajax');

Route::get('fixedassetsbycategory', 'FixedAsset\FixedAssetRegisterController@listFixedAssetCategoryFixedAssetRegister')->middleware('ajax');

Route::get('fixedassetsbyitem', 'FixedAsset\FixedAssetRegisterController@listItemFixedAssetRegister')->middleware('ajax');