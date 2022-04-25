<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
  public function register(Request $request){
        $data = $request->validate([
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'phone' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = Admin::create([
            'name' =>$data['name'],
            'email' =>$data['email'],
            'phone' =>$data['phone'],
            'password' =>Hash::make($data['password']),
        ]);
   
        $token = $user->createToken('fundaProjectToken')->plainTextToken;
       
        $response = [
            'admin'=> $user,
            'token'=>$token, 
                
        ];

        return response( $response, 201);
    }

    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required|email|max:191',
            'password' => 'required|string',
        ]);

        $user = Admin::where('email', $data['email'])->first();
        $username = Admin::where('email', $data['email'])->first('name');
        $email = Admin::where('email', $data['email'])->first('email');

        if(!$user || !Hash::check($data['password'],$user->password)){
            return response(['message'=>'Invalid Credentials'],401);
        }
        else{
            $token = $user->createToken('fundaProjectTokenLogin')->plainTextToken;
            $response = [
            'admin'=> $user,
            'token'=>$token, 
            ];

            return response($response, 200);
        }
    }

    public function logout(Request $request){
       auth()->user()->tokens()->delete();
        return [
            'message'=>'Admin Logged out Successfully',
            'success'=>true];
    }
}
