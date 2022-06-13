<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Deliveryboy;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class DeliveryBoyController extends Controller
{
    public function registerDeliveryBoy(Request $request){
        $data = $request->validate([
            'vendor_id'=>'required|integer',
            'deliveryboy_name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'phone' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = Deliveryboy::create([
            'restaurant_id' =>$data['vendor_id'],
            'deliveryboy_name' =>$data['deliveryboy_name'],
            'email' =>$data['email'],
            'phone' =>$data['phone'],
            'password' =>Hash::make($data['password']),
        ]);
   
        $token = $user->createToken('fundaProjectToken')->plainTextToken;
       
       if($user){
            $response = [
            'delivery boy registered' 
                
        ];
        return response( $response, 200);
       }
       else{
            return response(['message'=>'delivery boy not created'],401);
       }

        
    }

    public function getdeliveryboyDetails(Request $request){
            $deliveryboy = DB::table('deliveryboys')
                ->where('restaurant_id',$request['vendor_id'])
                ->get();

          if($deliveryboy->isEmpty()){

             $response = [
              
                'No deliveryboy Available',
        
            ];

            

            return response( $response, 200);

        }
        else{
             return response( $deliveryboy, 200);
            

             

        }
     }

     public function getdeliveryboyname(Request $request){
            $deliveryboy = DB::table('deliveryboys')
                ->where('restaurant_id',$request['vendor_id'])
                ->select('id','deliveryboy_name')
                ->get();

          if($deliveryboy->isEmpty()){

             $response = [
              
                'No deliveryboy Available',
        
            ];

            

            return response( $response, 200);

        }
        else{
             return response( $deliveryboy, 200);
            

             

        }
     }
}
