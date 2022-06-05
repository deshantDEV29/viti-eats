<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MPaisa extends Model
{
    use HasFactory;

      protected $fillable = [
        'phone',
        'pin',
       
    ];
}
