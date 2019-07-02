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
   $router->post('download/excel_file', ['uses' => 'ExporterController@excel_file']);
   $router->get('download/', ['uses' => 'ExporterController@download']);
   $router->post('download/notificacion', ['uses' => 'WSInternoController@CrearNotificacion']);
   $router->post('download/pdf', ['uses' => 'ExporterController@pdf_file']);
   
});

$router->group(['middleware' => ['auth']], function () use ($router) {
   
});
