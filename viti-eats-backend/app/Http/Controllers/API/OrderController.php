<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
     public function createOrder(Request $request){
            $order = Order::create([
            'user_id' =>$request['user_id'],
            'restaurant_id' =>$request['restaurant_id'],
            'address' =>$request['address'],
            'food_items' =>$request['food_items'],
            'order_status' =>'processing',
        ]);

        $response = [
                'Order Placed Successfully',
                     
            ];

            return response( $response, 200);
     }

     public function getOrder(Request $request){
            $order = DB::table('orders')
                ->where('user_id',$request['user_id'])
                ->get();

          if($order->isEmpty()){

             $response = [
              
                'No Orders Available',
        
            ];

            

            return response( $response, 200);

        }
        else{
             return response( $order, 200);
            

             

        }
     }

}
