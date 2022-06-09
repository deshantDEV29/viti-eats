<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FoodItem;
use App\Models\Restaurant;
use App\Models\FoodCategory;

class FoodItemController extends Controller
{
    public function add_fooditem(Request $request){
       
        $restaurant = FoodItem::create([
            'name'=>$request['name'],
            'long_description'=>$request['long_description'],
            'image'=>$request['image'],
            'foodcategory_id'=>$request['foodcategory_id'],
            'restaurants_id'=>$request['restaurants_id'],
            'price'=>$request['price'],
           
        ]);

        return [
            'message'=>'Food Item added successfully',
            'success'=>true];
    }

    public function remove_fooditem(Request $request){
        
        FoodItem::where('id',$request['id'])->delete();

       
        $response = [
            'Food Item Removed Successfully'        
        ];

        return response( $response, 200);
    }

    public function getrestaurant(){

        $fooditemList = Restaurant::all('id','name');

        
        return response($fooditemList, 200);
    }

    public function getfoodcategory(){

        $fooditemList = FoodCategory::all('id','category_description');

        
        return response($fooditemList, 200);
    }
}
