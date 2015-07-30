<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', array(
	'as'   => 'universe.index',
	'uses' => 'GameController@index'
));

Route::get('/game/{id}', array(
	'as'   => 'game.playground',
	'uses' => 'GameController@playground'
));

Route::any('/game/create', array(
	'as'   => 'game.create',
	'uses' => 'GameController@create'
));

Route::get('/planet/activate/{id}', array(
	'as'   => 'planet.activate',
	'uses' => 'PlanetController@activate'
));

Route::get('/planet/deactivate/{id}', array(
	'as'   => 'planet.deactivate',
	'uses' => 'PlanetController@deactivate'
));

Route::get('/planet/settle/{id}', array(
	'as'   => 'planet.settle',
	'uses' => 'PlanetController@settle'
));

Route::get('/ship/activate/{id}', array(
	'as'   => 'ship.activate',
	'uses' => 'ShipController@activate'
));

Route::get('/ship/deactivate/{id}', array(
	'as'   => 'ship.deactivate',
	'uses' => 'ShipController@deactivate'
));
