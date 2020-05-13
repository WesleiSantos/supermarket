<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class SupermarketCart
 * 
 * @property int $id_user
 * @property int $id_product
 * @property int $quantity
 * 
 * @property User $user
 * @property Product $product
 *
 * @package App\Models
 */
class SupermarketCart extends Model
{
	protected $table = 'supermarket_cart';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_user' => 'int',
		'id_product' => 'int',
		'quantity' => 'int'
	];

	protected $fillable = [
		'quantity'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}

	public function product()
	{
		return $this->belongsTo(Product::class, 'id_product');
	}
}
