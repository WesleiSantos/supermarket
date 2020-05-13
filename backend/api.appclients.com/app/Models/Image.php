<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Image
 * 
 * @property int $id_product
 * @property string $name_image
 * @property boolean $image
 * 
 * @property Product $product
 *
 * @package App\Models
 */
class Image extends Model
{
	protected $table = 'image';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_product' => 'int',
		'image' => 'boolean'
	];

	protected $fillable = [
		'image'
	];

	public function product()
	{
		return $this->belongsTo(Product::class, 'id_product');
	}
}
