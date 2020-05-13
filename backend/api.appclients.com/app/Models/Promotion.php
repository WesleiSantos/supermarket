<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Promotion
 * 
 * @property int $id
 * @property string $description
 * @property boolean $image
 * @property int $flag_active
 * @property string $name_promotion
 * @property float $value_discount
 * 
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class Promotion extends Model
{
	protected $table = 'promotion';
	public $timestamps = false;

	protected $casts = [
		'image' => 'boolean',
		'flag_active' => 'int',
		'value_discount' => 'float'
	];

	protected $fillable = [
		'description',
		'image',
		'flag_active',
		'name_promotion',
		'value_discount'
	];

	public function products()
	{
		return $this->belongsToMany(Product::class, 'product_promotion', 'id_promotion', 'id_product');
	}
}
