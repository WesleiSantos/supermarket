<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ClientOrder
 * 
 * @property int $id_client
 * @property int $id_order
 * 
 * @property User $user
 * @property Order $order
 *
 * @package App\Models
 */
class ClientOrder extends Model
{
	protected $table = 'client_order';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_client' => 'int',
		'id_order' => 'int'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_client');
	}

	public function order()
	{
		return $this->belongsTo(Order::class, 'id_order');
	}
}
