<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'long_description',
        'image',
        'foodcategory_id',
        'restaurants_id',
        'price'
        
    ];
}
