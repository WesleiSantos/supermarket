<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('delivery', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->time('time_delivery');
			$table->float('tariff_delivery', 10, 0);
			$table->integer('id_order')->index('fk_delivery_1_idx');
			$table->integer('client_id')->index('fk_delivery_2_idx');
			$table->primary(['id','client_id','id_order']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('delivery');
	}

}
