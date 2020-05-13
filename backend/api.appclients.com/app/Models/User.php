<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $id
 * @property string $name
 * @property string $surname
 * @property string $email
 * @property string $password
 * @property int $id_type_user
 * 
 * @property TypeUser $type_user
 * @property Address $address
 * @property Collection|ClientOrder[] $client_orders
 * @property Collection|Delivery[] $deliveries
 * @property Collection|Log[] $logs
 * @property Collection|SupermarketCart[] $supermarket_carts
 * @property Collection|Telephone[] $telephones
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'user';
	public $timestamps = false;

	protected $casts = [
		'id_type_user' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'name',
		'surname',
		'email',
		'password'
	];

	public function type_user()
	{
		return $this->belongsTo(TypeUser::class, 'id_type_user');
	}

	public function address()
	{
		return $this->hasOne(Address::class, 'id');
	}

	public function client_orders()
	{
		return $this->hasMany(ClientOrder::class, 'id_client');
	}

	public function deliveries()
	{
		return $this->hasMany(Delivery::class, 'client_id');
	}

	public function logs()
	{
		return $this->hasMany(Log::class, 'id_adm');
	}

	public function supermarket_carts()
	{
		return $this->hasMany(SupermarketCart::class, 'id_user');
	}

	public function telephones()
	{
		return $this->hasMany(Telephone::class, 'id_user');
	}
}
