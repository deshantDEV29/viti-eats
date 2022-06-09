<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\VendorAdmin;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'phone' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::create([
            'name' =>$data['name'],
            'email' =>$data['email'],
            'phone' =>$data['phone'],
            'password' =>Hash::make($data['password']),
            'role' =>'customer',
        ]);
   
        $token = $user->createToken('fundaProjectToken')->plainTextToken;
       
       if($user){
            $response = [
            'userid'=>$user['id'],
            'username'=> $user['name'],
            'useremail'=>$user['email'],
            'userrole'=>$user['role'],
            'token'=>$token, 
                
        ];
        return response( $response, 200);
       }
       else{
            return response(['message'=>'user not created'],401);
       }

        
    }


    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required|email|max:191',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $data['email'])->first();
        $username = User::where('email', $data['email'])->first('name');
        $email = User::where('email', $data['email'])->first('email');

        if(!$user || !Hash::check($data['password'],$user->password)){
            return response(['message'=>'Invalid Credentials'],401);
        }
        else{
            $token = $user->createToken('fundaProjectTokenLogin')->plainTextToken;
            $response = [
            'userid'=>$user['id'],
            'username'=> $user['name'],
            'useremail'=>$user['email'],
            'userrole'=>$user['role'],
            'token'=>$token, 
            ];

            return response($response, 200);
        }
    }

    public function logout(Request $request){
       auth()->user()->tokens()->delete();
       
             return [
            'message'=>'Logged out Successfully',
            'success'=>true];
       
        
        
    }

    public function getprofile(Request $request){

        $user = User::where('id', $request['id'])->get(['id','name','email','phone','profile_image']);

        if($user->isEmpty()){
            return response(['message'=>'Invalid Credentials'],401);
        }
        else{
            $response = $user;
           
            return response($response, 200);
        }
    }

    public function setprofileimage(Request $request){

        $user = User::where('id', $request['id'])->get();

        if($user->isEmpty()){

            return response(['message'=>'Invalid Credentials'],401);
        }
        else{
            User::where('id', $request['id'])
                ->update(['profile_image' => $request['image']]);

            $response=['profile updated'];
            return response($response, 200);
        }
    }

    public function setprofiledetails(Request $request){

        $user = User::where('id', $request['id'])->get();

        if($user->isEmpty()){

            return response(['message'=>'Invalid Credentials'],401);
        }
        else{
            User::where('id', $request['id'])
             ->update([
                 'name' => $request['name'],
                 'email' => $request['email'],
                 'phone' => $request['phone']]);
    
            return response('profile updated', 200);
        }
    }

    public function registerAdmin(Request $request){
        $data = $request->validate([
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'phone' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::create([
            'name' =>$data['name'],
            'email' =>$data['email'],
            'phone' =>$data['phone'],
            'password' =>Hash::make($data['password']),
            'role' =>'admin',
        ]);
   
        $token = $user->createToken('fundaProjectToken')->plainTextToken;
       
       if($user){
            $response = [
            'userid'=>$user['id'],
            'username'=> $user['name'],
            'useremail'=>$user['email'],
            'userrole'=>$user['role'],
            'token'=>$token, 
                
        ];
        return response( $response, 200);
       }
       else{
            return response(['message'=>'user not created'],401);
       }

        
    }

    public function registerVendor(Request $request){
        $data = $request->validate([
            'restaurant_id' => 'required|integer',
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'phone' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = VendorAdmin::create([
            'restaurant_id' =>$data['restaurant_id'],
            'name' =>$data['name'],
            'email' =>$data['email'],
            'phone' =>$data['phone'],
            'password' =>Hash::make($data['password']),
            'role' =>'vendor',
        ]);
   
        $token = $user->createToken('fundaProjectToken')->plainTextToken;
       
       if($user){
            $response = [
            'userid'=>$user['id'],
            'userrestaurantid'=>$user['restaurant_id'],
            'username'=> $user['name'],
            'useremail'=>$user['email'],
            'userrole'=>$user['role'],
            'token'=>$token, 
                
        ];
        return response( $response, 200);
       }
       else{
            return response(['message'=>'user not created'],401);
       }

        
    }

    public function loginvendor(Request $request){
        $data = $request->validate([
            'email' => 'required|email|max:191',
            'password' => 'required|string',
        ]);

        $user = VendorAdmin::where('email', $data['email'])->first();
        $username = VendorAdmin::where('email', $data['email'])->first('name');
        $email = VendorAdmin::where('email', $data['email'])->first('email');

        if(!$user || !Hash::check($data['password'],$user->password)){
            return response(['message'=>'Invalid Credentials'],401);
        }
        else{
            $token = $user->createToken('fundaProjectTokenLogin')->plainTextToken;
            $response = [
            'userid'=>$user['id'],
            'userrestaurantid'=>$user['restaurant_id'],
            'username'=> $user['name'],
            'useremail'=>$user['email'],
            'userrole'=>$user['role'],
            'token'=>$token, 
            ];

            return response($response, 200);
        }
    }
}
