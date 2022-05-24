<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Restaurant;
use App\Models\FoodCategory;
use App\Models\FoodItem;
use Illuminate\Support\Facades\DB;

class RestaurantAPIController extends Controller
{
     public function displayrestaurant(){

        $restaurantList = Restaurant::all('id','name','shortimage');

        // foreach($restaurantList as $restaurant) {
        //     $restaurant->shortimage = base64_encode( $restaurant->shortimage);
        // }
        
        return response($restaurantList, 200);
    }

    public function getrestaurantdetails(Request $request){

         $response =  Restaurant::where('id', $request['id'])->get(['id','name','longimage']);
        
        return response($response, 200);
    }

     public function getrestaurantfood(Request $request){

        $response = DB::table('food_items')
                        ->join('food_categories', 'food_items.foodcategory_id','=', 'food_categories.id')
                        ->join('restaurants', 'food_items.restaurants_id','=', 'restaurants.id')
                        ->where('food_items.restaurants_id','=',$request['id'])
                        ->select('food_items.id','food_items.foodcategory_id', 'food_items.name','food_items.long_description','food_items.image','food_categories.category_description','food_items.price')
                        ->orderBy('food_categories.category_description','asc')
                        ->get();
         
        
        return response($response, 200);
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
