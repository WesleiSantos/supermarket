<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductPromotionTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product_promotion', function(Blueprint $table)
		{
			$table->integer('id_product');
			$table->integer('id_promotion')->index('fk_product_promotion_2_idx');
			$table->primary(['id_product','id_promotion']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('product_promotion');
	}

}
