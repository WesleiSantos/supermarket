<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Log
 * 
 * @property int $id
 * @property Carbon $date
 * @property Carbon $time
 * @property string $description
 * @property int $id_adm
 * 
 * @property User $user
 *
 * @package App\Models
 */
class Log extends Model
{
	protected $table = 'log';
	public $timestamps = false;

	protected $casts = [
		'id_adm' => 'int'
	];

	protected $dates = [
		'date',
		'time'
	];

	protected $fillable = [
		'date',
		'time',
		'description',
		'id_adm'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_adm');
	}
}
