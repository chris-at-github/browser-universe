<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Ships extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('ships', function (Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
		});

		Schema::table('ships', function (Blueprint $table) {
			$table->string('name')->nullable();
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
		Schema::drop('ships');
	}
}
