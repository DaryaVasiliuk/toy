<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/toys/restore','ToysController@restore');
Route::get('/toys','ToysController@index');
Route::post('/toys','ToysController@create');
Route::put('/toys/{id}','ToysController@update');
Route::delete('/toys/{id}','ToysController@delete');
Route::get('/toys/{id}','ToysController@show');

Route::get('/categories','CategoryController@index');
Route::post('/categories/create','CategoryController@create');
Route::put('/categories/{id}','CategoryController@update');
Route::delete('/categories/delete','CategoryController@delete');
Route::get('/categories/restore','CategoryController@restore');
Route::get('/categories/{id}','CategoryController@show');

Route::get('/orders','OrdersController@index');
Route::post('/orders/create','OrdersController@create');
Route::delete('/orders/delete','OrdersController@delete');
Route::get('/orders/{id}','OrdersController@show');
Route::get('/orders/restore','OrdersController@restore');
Route::put('/orders/{id}','OrdersController@update');

