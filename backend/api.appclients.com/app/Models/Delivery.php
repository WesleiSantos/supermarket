<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Delivery
 * 
 * @property int $id
 * @property Carbon $time_delivery
 * @property float $tariff_delivery
 * @property int $id_order
 * @property int $client_id
 * 
 * @property Order $order
 * @property User $user
 *
 * @package App\Models
 */
class Delivery extends Model
{
	protected $table = 'delivery';
	public $timestamps = false;

	protected $casts = [
		'tariff_delivery' => 'float',
		'id_order' => 'int',
		'client_id' => 'int'
	];

	protected $dates = [
		'time_delivery'
	];

	protected $fillable = [
		'time_delivery',
		'tariff_delivery'
	];

	public function order()
	{
		return $this->belongsTo(Order::class, 'id_order');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'client_id');
	}
}
