<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTelephoneTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('telephone', function(Blueprint $table)
		{
			$table->foreign('id_user', 'fk_telephone_1')->references('id')->on('user')->onUpdate('NO ACTION')->onDelete('NO ACTION');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('telephone', function(Blueprint $table)
		{
			$table->dropForeign('fk_telephone_1');
		});
	}

}
