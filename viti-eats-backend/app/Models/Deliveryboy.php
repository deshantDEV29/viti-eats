<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deliveryboy extends Model
{
    use HasFactory;

    protected $fillable = [
        'restaurant_id',
        'deliveryboy_name',
        'phone',
        'email',
        'password',
        'profile_image'
    ];
    
}
