<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Restaurant;
use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\DB;

class DashboardContoller extends Controller
{
     public function totalvendors(){

        $totalvendors = Restaurant::all('id');
        $response = $totalvendors->count();
        
        return response($response, 200);
    }

    public function totalusers(){

        $totalvendors = User::all('id');
        $response = $totalvendors->count();
        
        return response($response, 200);
    }

    public function totalcommisison(){

        $response = DB::table('orders')
           ->sum(DB::raw('amount * 0.1'));
        
        return response($response, 200);
    }

    public function totalproduct(Request $request){

         $totalproduct = DB::table('food_items')
                ->where('restaurants_id',$request['vendor_id'])
                ->select('food_items.id')
                ->get();
        $response = $totalproduct->count();
        
        return response($response, 200);
    }

    public function totalsales(Request $request){

        $totalsales = DB::table('orders')
                ->where('restaurant_id',$request['vendor_id'])
                ->sum(DB::raw('amount'));
        $response = $totalsales;
        
        return response($response, 200);
    }


    public function displaycommisison(){

        $response = DB::table('orders')
                ->join('users', 'orders.user_id','=', 'users.id')
                ->join('restaurants', 'orders.restaurant_id','=', 'restaurants.id')
                ->select('orders.id','users.name','restaurants.restaurantname',DB::raw('amount * 0.1 as commission'))
                ->get();
           
        
        return response($response, 200);
    }
}
