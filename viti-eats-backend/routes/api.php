<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\RestaurantController;
use App\Http\Controllers\Admin\FoodCategoryController;
use App\Http\Controllers\Admin\FoodItemController;
use App\Http\Controllers\API\RestaurantAPIController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\DeliveryBoyController;


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

//Authentication Routes
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('getprofile', [UserController::class, 'getprofile']);
Route::post('setprofileimage', [UserController::class, 'setprofileimage']);
Route::post('setprofiledetails', [UserController::class, 'setprofiledetails']);


//vendor and admin registeration
Route::post('registerVendor', [UserController::class, 'registerVendor']);
Route::post('loginvendor', [UserController::class, 'loginvendor']);

//Restaurant Details Routes
Route::get('displayrestaurant', [RestaurantAPIController::class, 'displayrestaurant']);
Route::post('getrestaurantdetails', [RestaurantAPIController::class, 'getrestaurantdetails']);
Route::post('getrestaurantfood', [RestaurantAPIController::class, 'getrestaurantfood']);
Route::get('displaylistrestaurant', [RestaurantAPIController::class, 'displaylistrestaurant']);
Route::get('displayfoodcategory', [RestaurantAPIController::class, 'displayfoodcategory']);
Route::get('displayfooditem', [RestaurantAPIController::class, 'displayfooditem']);
//Adding to cart and creating Order Route
Route::post('addtocart', [CartController::class, 'addtocart']);
Route::post('removefromcart', [CartController::class, 'removefromcart']);
Route::post('displaycart', [CartController::class, 'displaycart']);

Route::post('getOrder', [OrderController::class, 'getOrder']);
//Authenticate Payment & Create Order
Route::post('createMpaisa', [OrderController::class, 'createMpaisa']);
Route::post('authenticatePayment', [OrderController::class, 'authenticatePayment']);
Route::post('createOrder', [OrderController::class, 'createOrder']);
Route::post('deleteCart', [OrderController::class, 'deleteCart']);

//Vendor Routes
Route::post('getVendorsOrder', [OrderController::class, 'getVendorsOrder']);
Route::post('processOrder', [OrderController::class, 'processOrder']);
Route::post('orderDelivered', [OrderController::class, 'orderDelivered']);
Route::post('registerDeliveryBoy', [DeliveryBoyController::class, 'registerDeliveryBoy']);
Route::post('getdeliveryboyDetails', [DeliveryBoyController::class, 'getdeliveryboyDetails']);
Route::post('getdeliveryboyname', [DeliveryBoyController::class, 'getdeliveryboyname']);

//Admin Routes
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