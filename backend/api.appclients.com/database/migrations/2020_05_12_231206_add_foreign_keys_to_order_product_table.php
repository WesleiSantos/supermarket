<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToOrderProductTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('order_product', function(Blueprint $table)
		{
			$table->foreign('id_order', 'fk_order_product_1')->references('id')->on('order')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('id_product', 'fk_order_product_2')->references('id')->on('product')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('order_product', function(Blueprint $table)
		{
			$table->dropForeign('fk_order_product_1');
			$table->dropForeign('fk_order_product_2');
		});
	}

}
