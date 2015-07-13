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

Route::get('/game/create', array(
	'as'   => 'game.create',
	'uses' => 'GameController@create'
));
