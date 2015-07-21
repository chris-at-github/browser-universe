<?php

use Illuminate\Database\Seeder;

class GameSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		DB::table('games')->insert([
			'name' 	=> 'Game A0',
			'turn'	=> 5,
		]);
	}
}
