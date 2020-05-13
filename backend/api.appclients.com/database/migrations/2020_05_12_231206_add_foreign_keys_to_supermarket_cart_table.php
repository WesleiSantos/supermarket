<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSupermarketCartTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('supermarket_cart', function(Blueprint $table)
		{
			$table->foreign('id_user', 'fk_supermarket_cart_1')->references('id')->on('user')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('id_product', 'fk_supermarket_cart_2')->references('id')->on('product')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('supermarket_cart', function(Blueprint $table)
		{
			$table->dropForeign('fk_supermarket_cart_1');
			$table->dropForeign('fk_supermarket_cart_2');
		});
	}

}
