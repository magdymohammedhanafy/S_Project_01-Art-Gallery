<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\Product\CreateProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::all();

        return ProductResource::collection($product);
    }

    public function findById($id)
    {
        $product = Product::findOrFail($id);

        return response()->json([
            'data' =>$product ,
        ]);
    }

    public function  findByCategoryId()
    {
        if (request()->has('category_id') && !empty(request()->category_id)) {
            $products->where('category_id', 'like', '%' . request()->category_id . '%');
        }
        return ProductResource::collection($product);
       /* $product = Product::findOrFail($category_id);

        return response()->json([
            'data' =>$product ,
        ]);*/
    }




     public function create(CreateProductRequest $request)
     {
        $product = $request->createProduct();
        return new ProductResource($product);
     }


    public function update(UpdateProductRequest $request)
    {
        $product =  $request->updateProduct();

        return new ProductResource($product);
    }

    public function delete($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json([
            'message' => '$product deleted successfully',
        ]);
    }
}
