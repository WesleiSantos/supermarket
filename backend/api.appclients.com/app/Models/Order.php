<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Order
 * 
 * @property int $id
 * @property Carbon $date_order
 * @property Carbon $time_order
 * @property int $quantity_products
 * @property float $value_total
 * @property float $change_of_money
 * @property int $active_flag
 * @property string $status
 * @property string $note
 * @property int $id_type_payment
 * 
 * @property Payment $payment
 * @property Collection|ClientOrder[] $client_orders
 * @property Collection|Delivery[] $deliveries
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class Order extends Model
{
	protected $table = 'order';
	public $timestamps = false;

	protected $casts = [
		'quantity_products' => 'int',
		'value_total' => 'float',
		'change_of_money' => 'float',
		'active_flag' => 'int',
		'id_type_payment' => 'int'
	];

	protected $dates = [
		'date_order',
		'time_order'
	];

	protected $fillable = [
		'date_order',
		'time_order',
		'quantity_products',
		'value_total',
		'change_of_money',
		'active_flag',
		'status',
		'note',
		'id_type_payment'
	];

	public function payment()
	{
		return $this->belongsTo(Payment::class, 'id_type_payment');
	}

	public function client_orders()
	{
		return $this->hasMany(ClientOrder::class, 'id_order');
	}

	public function deliveries()
	{
		return $this->hasMany(Delivery::class, 'id_order');
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, 'order_product', 'id_order', 'id_product');
	}
}
