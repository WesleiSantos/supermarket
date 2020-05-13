<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Permission
 * 
 * @property int $id
 * @property string $description
 * 
 * @property Collection|TypeUser[] $type_users
 *
 * @package App\Models
 */
class Permission extends Model
{
	protected $table = 'permission';
	public $timestamps = false;

	protected $fillable = [
		'description'
	];

	public function type_users()
	{
		return $this->belongsToMany(TypeUser::class, 'type_user_permission', 'id_type_user', 'id_type_user')
					->withPivot('id_permission');
	}
}
