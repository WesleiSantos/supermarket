<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ProductPromotion
 * 
 * @property int $id_product
 * @property int $id_promotion
 * 
 * @property Product $product
 * @property Promotion $promotion
 *
 * @package App\Models
 */
class ProductPromotion extends Model
{
	protected $table = 'product_promotion';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_product' => 'int',
		'id_promotion' => 'int'
	];

	public function product()
	{
		return $this->belongsTo(Product::class, 'id_product');
	}

	public function promotion()
	{
		return $this->belongsTo(Promotion::class, 'id_promotion');
	}
}
