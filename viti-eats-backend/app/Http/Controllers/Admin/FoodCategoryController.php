<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FoodCategory;

class FoodCategoryController extends Controller
{
    public function add_foodcategory(Request $request){
       
        $restaurant = FoodCategory::create([
            'category_description' =>$request['category_description'],
           
        ]);

        return [
            'message'=>'Food Category added successfully',
            'success'=>true];
    }

    public function remove_foodcategory(Request $request){
        
        FoodCategory::where('id',$request['id'])->delete();
       
        $response = [
            'Food Category Removed Successfully'        
        ];

        return response( $response, 200);
    }
}
