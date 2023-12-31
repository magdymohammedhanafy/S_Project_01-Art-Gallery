<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'product_id'

    ];

    // user one-to-one-relation

    public function user(){

        return $this->belongsTo(User::class);

    }

      //cart many to many relation with product

      public function products()
      {
          return $this->belongsToMany(Product::class);
      }
}
