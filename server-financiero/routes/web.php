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
});

$router->group(['middleware' => ['auth']], function () use ($router) {
   
   //FINANCIERO

   //CRUD Declaration
   $router->post('/declaration', ['uses' => 'DeclarationController@post']);
   $router->get('/declaration', ['uses' => 'DeclarationController@get']);
   $router->get('/declaration/paginate', ['uses' => 'DeclarationController@paginate']);
   $router->get('/declaration/backup', ['uses' => 'DeclarationController@backup']);
   $router->put('/declaration', ['uses' => 'DeclarationController@put']);
   $router->delete('/declaration', ['uses' => 'DeclarationController@delete']);
   $router->post('/declaration/masive_load', ['uses' => 'DeclarationController@masiveLoad']);
   $router->post('/declaration/register_data', ['uses' => 'DeclarationController@register_data']);
   
   //CRUD DeclarationItem
   $router->post('/declarationitem', ['uses' => 'DeclarationItemController@post']);
   $router->get('/declarationitem', ['uses' => 'DeclarationItemController@get']);
   $router->get('/declarationitem/paginate', ['uses' => 'DeclarationItemController@paginate']);
   $router->get('/declarationitem/backup', ['uses' => 'DeclarationItemController@backup']);
   $router->put('/declarationitem', ['uses' => 'DeclarationItemController@put']);
   $router->delete('/declarationitem', ['uses' => 'DeclarationItemController@delete']);
   $router->post('/declarationitem/masive_load', ['uses' => 'DeclarationItemController@masiveLoad']);

   //CRUD DeclarationItemCategory
   $router->post('/declarationitemcategory', ['uses' => 'DeclarationItemCategoryController@post']);
   $router->get('/declarationitemcategory', ['uses' => 'DeclarationItemCategoryController@get']);
   $router->get('/declarationitemcategory/paginate', ['uses' => 'DeclarationItemCategoryController@paginate']);
   $router->get('/declarationitemcategory/backup', ['uses' => 'DeclarationItemCategoryController@backup']);
   $router->put('/declarationitemcategory', ['uses' => 'DeclarationItemCategoryController@put']);
   $router->delete('/declarationitemcategory', ['uses' => 'DeclarationItemCategoryController@delete']);
   $router->post('/declarationitemcategory/masive_load', ['uses' => 'DeclarationItemCategoryController@masiveLoad']);

   //CRUD State
   $router->post('/state', ['uses' => 'StateController@post']);
   $router->get('/state', ['uses' => 'StateController@get']);
   $router->get('/state/paginate', ['uses' => 'StateController@paginate']);
   $router->get('/state/backup', ['uses' => 'StateController@backup']);
   $router->put('/state', ['uses' => 'StateController@put']);
   $router->delete('/state', ['uses' => 'StateController@delete']);
   $router->post('/state/masive_load', ['uses' => 'StateController@masiveLoad']);

   //CRUD StateDeclaration
   $router->post('/statedeclaration', ['uses' => 'StateDeclarationController@post']);
   $router->get('/statedeclaration', ['uses' => 'StateDeclarationController@get']);
   $router->get('/statedeclaration/paginate', ['uses' => 'StateDeclarationController@paginate']);
   $router->get('/statedeclaration/backup', ['uses' => 'StateDeclarationController@backup']);
   $router->put('/statedeclaration', ['uses' => 'StateDeclarationController@put']);
   $router->delete('/statedeclaration', ['uses' => 'StateDeclarationController@delete']);
   $router->post('/statedeclaration/masive_load', ['uses' => 'StateDeclarationController@masiveLoad']);

   //CRUD Pay
   $router->post('/pay', ['uses' => 'PayController@post']);
   $router->get('/pay', ['uses' => 'PayController@get']);
   $router->get('/pay/paginate', ['uses' => 'PayController@paginate']);
   $router->get('/pay/backup', ['uses' => 'PayController@backup']);
   $router->put('/pay', ['uses' => 'PayController@put']);
   $router->delete('/pay', ['uses' => 'PayController@delete']);
   $router->post('/pay/masive_load', ['uses' => 'PayController@masiveLoad']);

   //CRUD DeclarationItemValue
   $router->post('/declarationitemvalue', ['uses' => 'DeclarationItemValueController@post']);
   $router->get('/declarationitemvalue', ['uses' => 'DeclarationItemValueController@get']);
   $router->get('/declarationitemvalue/paginate', ['uses' => 'DeclarationItemValueController@paginate']);
   $router->get('/declarationitemvalue/backup', ['uses' => 'DeclarationItemValueController@backup']);
   $router->put('/declarationitemvalue', ['uses' => 'DeclarationItemValueController@put']);
   $router->delete('/declarationitemvalue', ['uses' => 'DeclarationItemValueController@delete']);
   $router->post('/declarationitemvalue/masive_load', ['uses' => 'DeclarationItemValueController@masiveLoad']);

   //CRUD PayAttachment
   $router->post('/payattachment', ['uses' => 'PayAttachmentController@post']);
   $router->get('/payattachment', ['uses' => 'PayAttachmentController@get']);
   $router->get('/payattachment/paginate', ['uses' => 'PayAttachmentController@paginate']);
   $router->get('/payattachment/backup', ['uses' => 'PayAttachmentController@backup']);
   $router->put('/payattachment', ['uses' => 'PayAttachmentController@put']);
   $router->delete('/payattachment', ['uses' => 'PayAttachmentController@delete']);
   $router->post('/payattachment/masive_load', ['uses' => 'PayAttachmentController@masiveLoad']);

   //CRUD DeclarationAttachment
   $router->post('/declarationattachment', ['uses' => 'DeclarationAttachmentController@post']);
   $router->get('/declarationattachment', ['uses' => 'DeclarationAttachmentController@get']);
   $router->get('/declarationattachment/paginate', ['uses' => 'DeclarationAttachmentController@paginate']);
   $router->get('/declarationattachment/backup', ['uses' => 'DeclarationAttachmentController@backup']);
   $router->put('/declarationattachment', ['uses' => 'DeclarationAttachmentController@put']);
   $router->delete('/declarationattachment', ['uses' => 'DeclarationAttachmentController@delete']);
   $router->post('/declarationattachment/masive_load', ['uses' => 'DeclarationAttachmentController@masiveLoad']);

   //CRUD Approval
   $router->post('/approval', ['uses' => 'ApprovalController@post']);
   $router->get('/approval', ['uses' => 'ApprovalController@get']);
   $router->get('/approval/paginate', ['uses' => 'ApprovalController@paginate']);
   $router->get('/approval/backup', ['uses' => 'ApprovalController@backup']);
   $router->put('/approval', ['uses' => 'ApprovalController@put']);
   $router->delete('/approval', ['uses' => 'ApprovalController@delete']);
   $router->post('/approval/masive_load', ['uses' => 'ApprovalController@masiveLoad']);

   //CRUD ApprovalState
   $router->post('/approvalstate', ['uses' => 'ApprovalStateController@post']);
   $router->get('/approvalstate', ['uses' => 'ApprovalStateController@get']);
   $router->get('/approvalstate/paginate', ['uses' => 'ApprovalStateController@paginate']);
   $router->get('/approvalstate/backup', ['uses' => 'ApprovalStateController@backup']);
   $router->put('/approvalstate', ['uses' => 'ApprovalStateController@put']);
   $router->delete('/approvalstate', ['uses' => 'ApprovalStateController@delete']);
   $router->post('/approvalstate/masive_load', ['uses' => 'ApprovalStateController@masiveLoad']);
});
