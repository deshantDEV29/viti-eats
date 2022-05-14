<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Restaurant;
use App\Models\FoodCategory;
use App\Models\FoodItem;

class RestaurantAPIController extends Controller
{
     public function displayrestaurant(){

        $restaurantList = Restaurant::all('id','name','shortimage');

        // foreach($restaurantList as $restaurant) {
        //     $restaurant->shortimage = base64_encode( $restaurant->shortimage);
        // }
        
        return response($restaurantList, 200);
    }

     public function displaylistrestaurant(){

        $restaurantList = Restaurant::all('id','name','created_at','updated_at');

        // foreach($restaurantList as $restaurant) {
        //     $restaurant->shortimage = base64_encode( $restaurant->shortimage);
        // }
        
        return response($restaurantList, 200);
    }

    public function displayfoodcategory(){

        $categoryList = FoodCategory::all();

        // foreach($restaurantList as $restaurant) {
        //     $restaurant->shortimage = base64_encode( $restaurant->shortimage);
        // }
        
        return response($categoryList, 200);
    }

    public function displayfooditem(){

        $fooditemList = FoodItem::all();

        
        return response($fooditemList, 200);
    }

}
