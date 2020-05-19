<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::group([

    'middleware' => 'api',
    'namespace' => 'Api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
   
});
//Route::post('register', 'Api\\AuthController@register');


Route::group([
    'middleware' => 'jwt.verify',
    'namespace' => 'Api',
    'prefix' => 'auth'

], function ($router) {
    Route::get('users', 'UserControler@index');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
});

    /*Route::post('register', 'Api\\AuthController@register');
    Route::post('login', 'Api\\AuthController@authenticate');
    Route::get('open', 'DataController@open');

    Route::group(['middleware' => ['jwt.verify']], function() {
        //Route::get('user', 'UserController@getAuthenticatedUser');
        //Route::get('closed', 'DataController@closed');
    });*/