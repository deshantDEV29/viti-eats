<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\MPaisa;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
     public function createOrder(Request $request){
            $order = Order::create([
            'user_id' =>$request['user_id'],
            'restaurant_id' =>$request['restaurant_id'],
            'address' =>$request['address'],
            'food_items' =>$request['food_items'],
            'amount' =>$request['amount'],
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

     public function processOrder(Request $request ){
          $check =DB::table('orders')
               ->where('id',$request['id'])
               ->get();

          if($check->isEmpty()){
               
               
               $response = [
                'Order Not Available',
                     
            ];
            return response( $response, 200);
          }
          else{

               DB::table('orders')
               ->where('id',$request['id'])
               ->update(['order_status' => 'Order Sent']);

               $response = [
                'Order Sent Successful',
                     
            ];

            return response( $response, 401);

          }

     }

     public function orderDelivered(Request $request ){
          $check =DB::table('orders')
               ->where('id',$request['id'])
               ->get();

          if($check->isEmpty()){
               
               
               $response = [
                'Order Not Available',
                     
            ];
            return response( $response, 200);
          }
          else{

               DB::table('orders')
               ->where('id',$request['id'])
               ->update(['order_status' => 'Delivered']);

               $response = [
                'Order Delivered',
                     
            ];

            return response( $response, 401);

          }

     }

     public function authenticatePayment(Request $request ){
          $check =DB::table('m_paisas')
               ->where('phone',$request['phone'])
               ->where('pin',$request['pin'])
               ->get();

          if($check->isEmpty()){
               
               
               $response = [
                'Wrong Credentials',
                     
            ];
            return response( $response, 200);
          }
          else{

               $response = [
                'Account Verified',
                     
            ];

            return response( $response, 401);

          }

     }

     public function createMpaisa(Request $request ){
          $check =DB::table('m_paisas')
               ->where('phone',$request['phone'])
               ->where('pin',$request['pin'])
               ->get();

          if($check->isEmpty()){
               MPaisa::create([
                    'phone' =>$request['phone'],
                    'pin' =>$request['pin'],
                ]);
               
                $response = [
                'Account Created',
                     
                    ];
               return response( $response, 200);
               
          }
          else{
               $response = [
                'Account Already Exists',
                     
            ];
            return response( $response, 401);
          }

     }

}
