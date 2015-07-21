<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Maps extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('maps', function (Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
		});

		Schema::table('maps', function (Blueprint $table) {
			$table->string('name')->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('maps');
	}
}
