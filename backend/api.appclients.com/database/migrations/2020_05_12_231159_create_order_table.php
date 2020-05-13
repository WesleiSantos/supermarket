<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateOrderTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('order', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->date('date_order')->default('CURRENT_DATE');
			$table->timestamp('time_order')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->integer('quantity_products');
			$table->float('value_total', 10, 0);
			$table->float('change_of_money', 10, 0);
			$table->boolean('active_flag');
			$table->enum('status', array('processando','a caminho','concluido','cancelado'));
			$table->string('note', 50)->nullable();
			$table->integer('id_type_payment')->index('fk_order_1_idx');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('order');
	}

}
