<?php

namespace App\Http\Controllers\Api;
use App\Models\Product;
use App\Models\Image;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Product::orderBy('id', 'asc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = $request->file('file');
        $this->imgAdd(1,$file);
        return $request->hasFile('file') ? 'true' : 'false' ;

        $validator = Validator::make($request->all(), [
            'description_product' => 'required|string|max:255',
		    'unity_sale' => 'required',
		    'value_unitary' => 'required',
		    'category' => 'required',
		    'percentage_discount',
		    'code' => 'unique:product',
            'description_measure',
        ]);

        if($validator->fails()){
               return response()->json($validator->errors(), 400);
        }
        
        $state=[
        'description_product' => $request->get('description_product'),
        'unity_sale' => $request->get('unity_sale'),
        'value_unitary' => $request->get('value_unitary'),
        'category' => $request->get('category'),
        'percentage_discount' => $request->get('percentage_discount'),
        'code' => $request->get('code'),
        'description_measure' => $request->get('description_measure')
        ];

        try{
            $product = Product::create($state);
            if($request->hasFile('file')){
                $file = $request->file('file');
                $this->imgAdd($product->id, $file);
            }
            return response()->json($product,201);
        }catch (Exception $e) {
            return response()->json($e);
        }
    }

    private function imgAdd($idProduct, $image){
            $path = "img";
    	    $ext = $image->getClientOriginalExtension();
    	    $fileName = rand(1111,9999) .'.'.$ext;
    	    $image->move($path, $fileName);
    	    $response = DB::table('image')->insert(['name_image'=>$fileName,'id_product'=>$idProduct]);
    }
    public function addImageProduct(Request $request){
        $file = $request->file('file');
        $path = "img";
    	$ext = $file->getClientOriginalExtension();
    	$fileName = rand(1111,9999) .'.'.$ext;
    	$file->move($path, $fileName);
    	$response = DB::table('image')->insert(['name_image'=>$fileName,'id_product'=>1]);
 
    	return $response;
    }



    public function nova(Request $request){
        return $request->hasFile('FormData') ? 'true' : 'false';
        $image = $request->file('FormData');
        $image = $request->FormData;
        return $image;
        $path=null;
        if($image){
            $path = $image->store('images','public');
        }
        return $path ? $path : 'não'; 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
