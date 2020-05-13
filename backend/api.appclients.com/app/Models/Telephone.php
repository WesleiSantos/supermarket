<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Telephone
 * 
 * @property int $id_user
 * @property string $num_telephone
 * 
 * @property User $user
 *
 * @package App\Models
 */
class Telephone extends Model
{
	protected $table = 'telephone';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_user' => 'int'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}
}
