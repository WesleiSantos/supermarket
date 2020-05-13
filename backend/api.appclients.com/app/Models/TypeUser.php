<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TypeUser
 * 
 * @property int $id
 * @property string $type
 * 
 * @property Collection|Permission[] $permissions
 * @property Collection|User[] $users
 *
 * @package App\Models
 */
class TypeUser extends Model
{
	protected $table = 'type_user';
	public $timestamps = false;

	protected $fillable = [
		'type'
	];

	public function permissions()
	{
		return $this->belongsToMany(Permission::class, 'type_user_permission', 'id_type_user', 'id_type_user')
					->withPivot('id_permission');
	}

	public function users()
	{
		return $this->hasMany(User::class, 'id_type_user');
	}
}
