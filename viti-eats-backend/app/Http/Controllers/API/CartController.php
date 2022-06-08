<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function addtocart(Request $request){
        $check=DB::table('carts')
                ->where('user_id',$request['user_id'])
                ->where('food_id',$request['food_id'])
                ->get();
                       

        if($check->isEmpty()){
            Cart::create([
                'user_id'=>$request['user_id'],
                'food_id'=>$request['food_id'],
                'quantity'=>1
           
             ]);
            $response = [
                'Add to Cart Successful',
                     
            ];

            return response( $response, 200);

        }
        else{
             
           DB::table('carts')
                ->where('user_id',$request['user_id'])
                ->where('food_id',$request['food_id'])
                ->increment('quantity',1);
             $response = [
              
                'update succesful',
        
            ];

            

            return response( $response, 200);

             

        }
       
     

    }

    public function removefromcart(Request $request){
       

        $check = DB::table('carts')
                ->where('id',$request['cart_id'])
                // ->where('food_id',$request['food_id'])
                ->get();

         if($check->isEmpty()){

                return response( 'nothing to delete', 401);

        }
            else{
                $check = DB::table('carts')
                ->where('id',$request['cart_id'])
                // ->where('food_id',$request['food_id'])
                ->delete();
                
                return response( 'successful', 200);
            }
        }

        public function displaycart(Request $request){
       
            $check = DB::table('carts')
                    ->join('food_items', 'carts.food_id','=', 'food_items.id')
                    ->join('restaurants', 'food_items.restaurants_id','=', 'restaurants.id')
                    ->where('user_id',$request['user_id'])
                    ->select('carts.id','food_items.name','carts.quantity','food_items.image','food_items.price','food_items.restaurants_id','restaurants.restaurantname')
                    ->get();

             if($check->isEmpty()){

                return response( 'nothing to display', 401);

        }
            else{

                
                return response( $check, 200);
            }
        }

}
