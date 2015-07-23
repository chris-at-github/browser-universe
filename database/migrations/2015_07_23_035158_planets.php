<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Planets extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('planets', function (Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
		});

		Schema::table('planets', function (Blueprint $table) {
			$table->string('name')->nullable();
			$table->integer('map');
			$table->integer('x');
			$table->integer('y');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('planets');
	}
}
