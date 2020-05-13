<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Address
 * 
 * @property int $id
 * @property string $street
 * @property int $number
 * @property string $district
 * @property string $cep
 * @property string $city
 * @property string $complement
 * @property int $id_user
 * 
 * @property User $user
 *
 * @package App\Models
 */
class Address extends Model
{
	protected $table = 'address';
	public $timestamps = false;

	protected $casts = [
		'number' => 'int',
		'id_user' => 'int'
	];

	protected $fillable = [
		'street',
		'number',
		'district',
		'cep',
		'city',
		'complement',
		'id_user'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id');
	}
}
