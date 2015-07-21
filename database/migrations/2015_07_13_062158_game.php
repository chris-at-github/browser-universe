<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Game extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('games', function (Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
		});

		Schema::table('games', function (Blueprint $table) {
			$table->string('name')->nullable();
			$table->integer('turn');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('games', function (Blueprint $table) {
		});
	}
}
