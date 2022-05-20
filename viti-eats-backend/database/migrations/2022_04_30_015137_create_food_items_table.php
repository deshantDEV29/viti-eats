<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food_items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('long_description');
            $table->string('image');
            $table->foreignId('foodcategory_id')->constrained('food_categories');
            $table->foreignId('restaurants_id')->constrained('restaurants');
            $table->double('price');
            $table->timestamps();
        });

        DB::statement("ALTER TABLE food_items  MODIFY COLUMN long_description MEDIUMTEXT,MODIFY COLUMN image MEDIUMTEXT");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food_items');
    }
};
