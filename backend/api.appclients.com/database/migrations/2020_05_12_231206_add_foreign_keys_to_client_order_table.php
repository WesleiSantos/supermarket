<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToClientOrderTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('client_order', function(Blueprint $table)
		{
			$table->foreign('id_client', 'fk_client_order_1')->references('id')->on('user')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('id_order', 'fk_client_order_2')->references('id')->on('order')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('client_order', function(Blueprint $table)
		{
			$table->dropForeign('fk_client_order_1');
			$table->dropForeign('fk_client_order_2');
		});
	}

}
