<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;




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
class User extends Authenticatable implements JWTSubject
{
	use Notifiable;
	protected $table = 'user';
	public $timestamps = false;
	protected $primaryKey = 'id';

	protected $casts = [
		'id_type_user' => 'int','email_verified_at' => 'datetime',
	];

	
	protected $fillable = [
		'name',
		'surname',
		'email',
		'password',
		'id_type_user'
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

	 // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
		//return ['email' => $this->email];
		return [];
    }
}
