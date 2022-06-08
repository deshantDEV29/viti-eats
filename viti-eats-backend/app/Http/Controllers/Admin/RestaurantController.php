<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Restaurant;

class RestaurantController extends Controller
{
    public function addrestaurant(Request $request){

        // $shortimage = base64_encode($request['shortimage']);
        // $longimage = base64_encode($request['longimage']);
       
        $restaurant = Restaurant::create([
            
            'restaurantname' =>$request['restaurantname'],
            'shortimage' =>$request['shortimage'],
            'longimage' =>$request['longimage'],
        ]);

        return [
            'message'=>'Restaurant added successfully',
            'success'=>true];
    }

    public function removerestaurant(Request $request){
        
        Restaurant::where('id',$request['id'])->delete();
       
        $response = [
            'Restaurant Removed Successfully'        
        ];

        return response( $response, 200);
    }

    
}
