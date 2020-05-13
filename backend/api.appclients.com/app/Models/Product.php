<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Product
 * 
 * @property int $id
 * @property string $name
 * @property string $unity_sale
 * @property float $value_unitary
 * @property int $category
 * @property float $percentage_discount
 * @property string $code
 * @property string $description_measure
 * 
 * @property Collection|Image[] $images
 * @property Collection|Order[] $orders
 * @property Collection|Promotion[] $promotions
 * @property Collection|Stock[] $stocks
 * @property Collection|SupermarketCart[] $supermarket_carts
 *
 * @package App\Models
 */
class Product extends Model
{
	protected $table = 'product';
	public $timestamps = false;

	protected $casts = [
		'value_unitary' => 'float',
		'category' => 'int',
		'percentage_discount' => 'float'
	];

	protected $fillable = [
		'name',
		'unity_sale',
		'value_unitary',
		'category',
		'percentage_discount',
		'code',
		'description_measure'
	];

	public function category()
	{
		return $this->belongsTo(Category::class, 'category');
	}

	public function images()
	{
		return $this->hasMany(Image::class, 'id_product');
	}

	public function orders()
	{
		return $this->belongsToMany(Order::class, 'order_product', 'id_product', 'id_order');
	}

	public function promotions()
	{
		return $this->belongsToMany(Promotion::class, 'product_promotion', 'id_product', 'id_promotion');
	}

	public function stocks()
	{
		return $this->hasMany(Stock::class);
	}

	public function supermarket_carts()
	{
		return $this->hasMany(SupermarketCart::class, 'id_product');
	}
}
