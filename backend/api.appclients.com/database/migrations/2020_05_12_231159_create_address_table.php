<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('address', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('street', 50)->nullable();
			$table->integer('number')->nullable();
			$table->string('district', 50)->nullable();
			$table->string('cep', 15);
			$table->string('city', 50)->nullable();
			$table->string('complement', 100)->nullable();
			$table->integer('id_user');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('address');
	}

}
