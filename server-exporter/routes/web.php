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
   $router->post('download/pdf', ['uses' => 'ExporterController@pdf_file']);
   $router->post('download/template', ['uses' => 'ExporterController@pdf_template']);
   $router->post('download/pdf_checklist', ['uses' => 'ExporterController@pdf_checklist']);
   $router->post('download/pdf_tarifario_rack', ['uses' => 'ExporterController@pdf_tarifario_rack']);
});

$router->group(['middleware' => ['auth']], function () use ($router) {

   //EXPORTER

   //CRUD template
   $router->post('/template', ['uses' => 'templateController@post']);
   $router->get('/template', ['uses' => 'templateController@get']);
   $router->get('/template/paginate', ['uses' => 'templateController@paginate']);
   $router->get('/template/backup', ['uses' => 'templateController@backup']);
   $router->put('/template', ['uses' => 'templateController@put']);
   $router->delete('/template', ['uses' => 'templateController@delete']);
   $router->post('/template/masive_load', ['uses' => 'templateController@masiveLoad']);
});
