<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTypeUserPermissionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('type_user_permission', function(Blueprint $table)
		{
			$table->foreign('id_type_user', 'fk_type_user_permission_1')->references('id')->on('type_user')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('id_type_user', 'fk_type_user_permission_2')->references('id')->on('permission')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('type_user_permission', function(Blueprint $table)
		{
			$table->dropForeign('fk_type_user_permission_1');
			$table->dropForeign('fk_type_user_permission_2');
		});
	}

}
