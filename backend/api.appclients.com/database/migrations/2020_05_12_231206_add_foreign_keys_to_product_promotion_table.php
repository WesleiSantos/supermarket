<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToProductPromotionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('product_promotion', function(Blueprint $table)
		{
			$table->foreign('id_product', 'fk_product_promotion_1')->references('id')->on('product')->onUpdate('NO ACTION')->onDelete('NO ACTION');
			$table->foreign('id_promotion', 'fk_product_promotion_2')->references('id')->on('promotion')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('product_promotion', function(Blueprint $table)
		{
			$table->dropForeign('fk_product_promotion_1');
			$table->dropForeign('fk_product_promotion_2');
		});
	}

}
