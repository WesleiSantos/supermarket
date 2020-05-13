<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('product', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('name', 100);
			$table->enum('unity_sale', array('UN','KG','MG','G','L'));
			$table->float('value_unitary', 10, 0);
			$table->integer('category')->index('fk_product_1_idx');
			$table->float('percentage_discount', 10, 0)->nullable()->default(0);
			$table->string('code', 45)->nullable();
			$table->string('description_measure', 60)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('product');
	}

}
