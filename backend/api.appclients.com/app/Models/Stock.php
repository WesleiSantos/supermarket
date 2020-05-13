<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Stock
 * 
 * @property int $id
 * @property int $product_id
 * @property int $quantity
 * 
 * @property Product $product
 *
 * @package App\Models
 */
class Stock extends Model
{
	protected $table = 'stock';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id' => 'int',
		'product_id' => 'int',
		'quantity' => 'int'
	];

	protected $fillable = [
		'quantity'
	];

	public function product()
	{
		return $this->belongsTo(Product::class);
	}
}
