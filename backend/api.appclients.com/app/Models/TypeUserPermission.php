<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class TypeUserPermission
 * 
 * @property int $id_type_user
 * @property int $id_permission
 * 
 * @property TypeUser $type_user
 * @property Permission $permission
 *
 * @package App\Models
 */
class TypeUserPermission extends Model
{
	protected $table = 'type_user_permission';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_type_user' => 'int',
		'id_permission' => 'int'
	];

	public function type_user()
	{
		return $this->belongsTo(TypeUser::class, 'id_type_user');
	}

	public function permission()
	{
		return $this->belongsTo(Permission::class, 'id_type_user');
	}
}
