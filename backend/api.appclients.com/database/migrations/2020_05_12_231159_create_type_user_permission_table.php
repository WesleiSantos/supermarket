<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeUserPermissionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('type_user_permission', function(Blueprint $table)
		{
			$table->integer('id_type_user')->index('fk_type_user_permission_2');
			$table->integer('id_permission');
			$table->primary(['id_permission','id_type_user']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('type_user_permission');
	}

}
