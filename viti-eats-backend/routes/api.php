<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\RestaurantController;
use App\Http\Controllers\Admin\FoodCategoryController;
use App\Http\Controllers\Admin\FoodItemController;
use App\Http\Controllers\API\RestaurantAPIController;


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

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('displayrestaurant', [RestaurantAPIController::class, 'displayrestaurant']);
Route::get('displaylistrestaurant', [RestaurantAPIController::class, 'displaylistrestaurant']);
Route::get('displayfoodcategory', [RestaurantAPIController::class, 'displayfoodcategory']);
Route::get('displayfooditem', [RestaurantAPIController::class, 'displayfooditem']);

Route::post('addrestaurant', [RestaurantController::class, 'addrestaurant']);
Route::post('removerestaurant', [RestaurantController::class, 'removerestaurant']);

Route::post('add_foodcategory', [FoodCategoryController::class, 'add_foodcategory']);
Route::post('remove_foodcategory', [FoodCategoryController::class, 'remove_foodcategory']);

Route::post('add_fooditem', [FoodItemController::class, 'add_fooditem']);
Route::post('remove_fooditem', [FoodItemController::class, 'remove_fooditem']);

Route::get('getrestaurant', [FoodItemController::class, 'getrestaurant']);
Route::get('getfoodcategory', [FoodItemController::class, 'getfoodcategory']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [UserController::class, 'logout']);
});


Route::prefix('admin')->group(function () {
    Route::post('register', [AdminController::class, 'register']);
    Route::post('login', [AdminController::class, 'login']);
  

    Route::middleware(['auth:sanctum'])->group(function () {
        Route::post('logout', [AdminController::class, 'logout']);
    });
});