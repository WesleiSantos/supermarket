<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupermarketCartTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('supermarket_cart', function(Blueprint $table)
		{
			$table->integer('id_user');
			$table->integer('id_product')->index('fk_supermarket_cart_2_idx');
			$table->integer('quantity');
			$table->primary(['id_user','id_product']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('supermarket_cart');
	}

}
