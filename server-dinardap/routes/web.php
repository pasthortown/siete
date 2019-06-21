<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
   return 'Web Wervice Realizado con LSCodeGenerator';
});

$router->group(['middleware' => []], function () use ($router) {
   $router->post('checkSoap', ['uses' => 'DinardapController@checkSoap']);
   $router->post('cedula', ['uses' => 'DinardapController@Cedula']);
   $router->post('paquete', ['uses' => 'DinardapController@paquete']);
   $router->post('ruc', ['uses' => 'DinardapController@RUC']);
   $router->post('supercias', ['uses' => 'DinardapController@SuperCIAS']);
});

$router->group(['middleware' => ['auth']], function () use ($router) {
   $router->post('/user/password_change', ['uses' => 'AuthController@passwordChange']);

   //DINARDAP

   //CRUD ProfilePicture
   $router->post('/profilepicture', ['uses' => 'ProfilePictureController@post']);
   $router->get('/profilepicture', ['uses' => 'ProfilePictureController@get']);
   $router->get('/profilepicture/paginate', ['uses' => 'ProfilePictureController@paginate']);
   $router->put('/profilepicture', ['uses' => 'ProfilePictureController@put']);
   $router->delete('/profilepicture', ['uses' => 'ProfilePictureController@delete']);

   //CRUD User
   $router->post('/user', ['uses' => 'UserController@post']);
   $router->get('/user', ['uses' => 'UserController@get']);
   $router->get('/user/paginate', ['uses' => 'UserController@paginate']);
   $router->put('/user', ['uses' => 'UserController@put']);
   $router->delete('/user', ['uses' => 'UserController@delete']);

   //CRUD Ruc
   $router->post('/ruc', ['uses' => 'RucController@post']);
   $router->get('/ruc', ['uses' => 'RucController@get']);
   $router->get('/ruc/paginate', ['uses' => 'RucController@paginate']);
   $router->get('/ruc/backup', ['uses' => 'RucController@backup']);
   $router->put('/ruc', ['uses' => 'RucController@put']);
   $router->delete('/ruc', ['uses' => 'RucController@delete']);
   $router->post('/ruc/masive_load', ['uses' => 'RucController@masiveLoad']);

   //CRUD Identification
   $router->post('/identification', ['uses' => 'IdentificationController@post']);
   $router->get('/identification', ['uses' => 'IdentificationController@get']);
   $router->get('/identification/paginate', ['uses' => 'IdentificationController@paginate']);
   $router->get('/identification/backup', ['uses' => 'IdentificationController@backup']);
   $router->put('/identification', ['uses' => 'IdentificationController@put']);
   $router->delete('/identification', ['uses' => 'IdentificationController@delete']);
   $router->post('/identification/masive_load', ['uses' => 'IdentificationController@masiveLoad']);
});