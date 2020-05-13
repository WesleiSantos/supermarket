<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class OrderProduct
 * 
 * @property int $id_order
 * @property int $id_product
 * 
 * @property Order $order
 * @property Product $product
 *
 * @package App\Models
 */
class OrderProduct extends Model
{
	protected $table = 'order_product';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_order' => 'int',
		'id_product' => 'int'
	];

	public function order()
	{
		return $this->belongsTo(Order::class, 'id_order');
	}

	public function product()
	{
		return $this->belongsTo(Product::class, 'id_product');
	}
}
