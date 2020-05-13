<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToDeliveryTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('delivery', function(Blueprint $table)
		{
			$table->foreign('id_order', 'fk_delivery_1')->references('id')->on('order')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('client_id', 'fk_delivery_2')->references('id')->on('user')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('delivery', function(Blueprint $table)
		{
			$table->dropForeign('fk_delivery_1');
			$table->dropForeign('fk_delivery_2');
		});
	}

}
