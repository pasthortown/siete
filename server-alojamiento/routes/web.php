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
   $router->get('/registerstate/get_by_register_id', ['uses' => 'RegisterStateController@get_by_register_id']);
});

$router->group(['middleware' => ['auth']], function () use ($router) {
   //CRUD Register
   $router->post('/register', ['uses' => 'RegisterController@post']);
   $router->get('/register', ['uses' => 'RegisterController@get']);
   $router->get('/register/get_registers_by_ruc', ['uses' => 'RegisterController@get_registers_by_ruc']);
   $router->get('/register/get_register_data', ['uses' => 'RegisterController@get_register_data']);
   $router->get('/register/paginate', ['uses' => 'RegisterController@paginate']);
   $router->get('/register/backup', ['uses' => 'RegisterController@backup']);
   $router->post('/register/register_register_data', ['uses' => 'RegisterController@register_register_data']);
   $router->put('/register', ['uses' => 'RegisterController@put']);
   $router->delete('/register', ['uses' => 'RegisterController@delete']);
   $router->post('/register/masive_load', ['uses' => 'RegisterController@masiveLoad']);

   //CRUD Capacity
   $router->post('/capacity', ['uses' => 'CapacityController@post']);
   $router->get('/capacity', ['uses' => 'CapacityController@get']);
   $router->get('/capacity/paginate', ['uses' => 'CapacityController@paginate']);
   $router->get('/capacity/backup', ['uses' => 'CapacityController@backup']);
   $router->put('/capacity', ['uses' => 'CapacityController@put']);
   $router->delete('/capacity', ['uses' => 'CapacityController@delete']);
   $router->post('/capacity/masive_load', ['uses' => 'CapacityController@masiveLoad']);

   //CRUD ComplementaryServiceType
   $router->post('/complementaryservicetype', ['uses' => 'ComplementaryServiceTypeController@post']);
   $router->get('/complementaryservicetype', ['uses' => 'ComplementaryServiceTypeController@get']);
   $router->get('/complementaryservicetype/paginate', ['uses' => 'ComplementaryServiceTypeController@paginate']);
   $router->get('/complementaryservicetype/filtered', ['uses' => 'ComplementaryServiceTypeController@filtered']);
   $router->get('/complementaryservicetype/filtered-paginate', ['uses' => 'ComplementaryServiceTypeController@filtered_paginate']);
   $router->get('/complementaryservicetype/backup', ['uses' => 'ComplementaryServiceTypeController@backup']);
   $router->put('/complementaryservicetype', ['uses' => 'ComplementaryServiceTypeController@put']);
   $router->delete('/complementaryservicetype', ['uses' => 'ComplementaryServiceTypeController@delete']);
   $router->post('/complementaryservicetype/masive_load', ['uses' => 'ComplementaryServiceTypeController@masiveLoad']);
   
   //CRUD RegisterType
   $router->post('/registertype', ['uses' => 'RegisterTypeController@post']);
   $router->get('/registertype', ['uses' => 'RegisterTypeController@get']);
   $router->get('/registertype/paginate', ['uses' => 'RegisterTypeController@paginate']);
   $router->get('/registertype/filtered', ['uses' => 'RegisterTypeController@filtered']);
   $router->get('/registertype/filtered-paginate', ['uses' => 'RegisterTypeController@filtered_paginate']);
   $router->get('/registertype/backup', ['uses' => 'RegisterTypeController@backup']);
   $router->put('/registertype', ['uses' => 'RegisterTypeController@put']);
   $router->delete('/registertype', ['uses' => 'RegisterTypeController@delete']);
   $router->post('/registertype/masive_load', ['uses' => 'RegisterTypeController@masiveLoad']);

   //CRUD Requisite
   $router->post('/requisite', ['uses' => 'RequisiteController@post']);
   $router->get('/requisite', ['uses' => 'RequisiteController@get']);
   $router->get('/requisite/paginate', ['uses' => 'RequisiteController@paginate']);
   $router->get('/requisite/filtered', ['uses' => 'RequisiteController@filtered']);
   $router->get('/requisite/backup', ['uses' => 'RequisiteController@backup']);
   $router->put('/requisite', ['uses' => 'RequisiteController@put']);
   $router->delete('/requisite', ['uses' => 'RequisiteController@delete']);
   $router->post('/requisite/masive_load', ['uses' => 'RequisiteController@masiveLoad']);

   //CRUD RegisterRequisite
   $router->post('/registerrequisite', ['uses' => 'RegisterRequisiteController@post']);
   $router->get('/registerrequisite', ['uses' => 'RegisterRequisiteController@get']);
   $router->get('/registerrequisite/paginate', ['uses' => 'RegisterRequisiteController@paginate']);
   $router->get('/registerrequisite/backup', ['uses' => 'RegisterRequisiteController@backup']);
   $router->put('/registerrequisite', ['uses' => 'RegisterRequisiteController@put']);
   $router->delete('/registerrequisite', ['uses' => 'RegisterRequisiteController@delete']);
   $router->post('/registerrequisite/masive_load', ['uses' => 'RegisterRequisiteController@masiveLoad']);
   
   //CRUD State
   $router->post('/state', ['uses' => 'StateController@post']);
   $router->get('/state', ['uses' => 'StateController@get']);
   $router->get('/state/paginate', ['uses' => 'StateController@paginate']);
   $router->get('/state/backup', ['uses' => 'StateController@backup']);
   $router->put('/state', ['uses' => 'StateController@put']);
   $router->delete('/state', ['uses' => 'StateController@delete']);
   $router->post('/state/masive_load', ['uses' => 'StateController@masiveLoad']);

   //CRUD RegisterState
   $router->post('/registerstate', ['uses' => 'RegisterStateController@post']);
   $router->get('/registerstate', ['uses' => 'RegisterStateController@get']);
   
   $router->get('/registerstate/paginate', ['uses' => 'RegisterStateController@paginate']);
   $router->get('/registerstate/backup', ['uses' => 'RegisterStateController@backup']);
   $router->put('/registerstate', ['uses' => 'RegisterStateController@put']);
   $router->delete('/registerstate', ['uses' => 'RegisterStateController@delete']);
   $router->post('/registerstate/masive_load', ['uses' => 'RegisterStateController@masiveLoad']);

   //CRUD TariffType
   $router->post('/tarifftype', ['uses' => 'TariffTypeController@post']);
   $router->get('/tarifftype', ['uses' => 'TariffTypeController@get']);
   $router->get('/tarifftype/paginate', ['uses' => 'TariffTypeController@paginate']);
   $router->get('/tarifftype/backup', ['uses' => 'TariffTypeController@backup']);
   $router->get('/tarifftype/filtered', ['uses' => 'TariffTypeController@filtered']);
   $router->get('/tarifftype/filtered-paginate', ['uses' => 'TariffTypeController@filtered_paginate']);
   $router->put('/tarifftype', ['uses' => 'TariffTypeController@put']);
   $router->delete('/tarifftype', ['uses' => 'TariffTypeController@delete']);
   $router->post('/tarifftype/masive_load', ['uses' => 'TariffTypeController@masiveLoad']);

   //CRUD Tariff
   $router->post('/tariff', ['uses' => 'TariffController@post']);
   $router->get('/tariff', ['uses' => 'TariffController@get']);
   $router->get('/tariff/paginate', ['uses' => 'TariffController@paginate']);
   $router->get('/tariff/backup', ['uses' => 'TariffController@backup']);
   $router->put('/tariff', ['uses' => 'TariffController@put']);
   $router->delete('/tariff', ['uses' => 'TariffController@delete']);
   $router->post('/tariff/masive_load', ['uses' => 'TariffController@masiveLoad']);

   //CRUD Bed
   $router->post('/bed', ['uses' => 'BedController@post']);
   $router->get('/bed', ['uses' => 'BedController@get']);
   $router->get('/bed/paginate', ['uses' => 'BedController@paginate']);
   $router->get('/bed/backup', ['uses' => 'BedController@backup']);
   $router->put('/bed', ['uses' => 'BedController@put']);
   $router->delete('/bed', ['uses' => 'BedController@delete']);
   $router->post('/bed/masive_load', ['uses' => 'BedController@masiveLoad']);

   //CRUD BedType
   $router->post('/bedtype', ['uses' => 'BedTypeController@post']);
   $router->get('/bedtype', ['uses' => 'BedTypeController@get']);
   $router->get('/bedtype/paginate', ['uses' => 'BedTypeController@paginate']);
   $router->get('/bedtype/filtered', ['uses' => 'BedTypeController@filtered']);
   $router->get('/bedtype/backup', ['uses' => 'BedTypeController@backup']);
   $router->put('/bedtype', ['uses' => 'BedTypeController@put']);
   $router->delete('/bedtype', ['uses' => 'BedTypeController@delete']);
   $router->post('/bedtype/masive_load', ['uses' => 'BedTypeController@masiveLoad']);


   //CRUD CapacityType
   $router->post('/capacitytype', ['uses' => 'CapacityTypeController@post']);
   $router->get('/capacitytype', ['uses' => 'CapacityTypeController@get']);
   $router->get('/capacitytype/paginate', ['uses' => 'CapacityTypeController@paginate']);
   $router->get('/capacitytype/filtered', ['uses' => 'CapacityTypeController@filtered']);
   $router->get('/capacitytype/backup', ['uses' => 'CapacityTypeController@backup']);
   $router->put('/capacitytype', ['uses' => 'CapacityTypeController@put']);
   $router->delete('/capacitytype', ['uses' => 'CapacityTypeController@delete']);
   $router->post('/capacitytype/masive_load', ['uses' => 'CapacityTypeController@masiveLoad']);

   //CRUD CapacityPicture
   $router->post('/capacitypicture', ['uses' => 'CapacityPictureController@post']);
   $router->get('/capacitypicture', ['uses' => 'CapacityPictureController@get']);
   $router->get('/capacitypicture/paginate', ['uses' => 'CapacityPictureController@paginate']);
   $router->get('/capacitypicture/backup', ['uses' => 'CapacityPictureController@backup']);
   $router->put('/capacitypicture', ['uses' => 'CapacityPictureController@put']);
   $router->delete('/capacitypicture', ['uses' => 'CapacityPictureController@delete']);
   $router->post('/capacitypicture/masive_load', ['uses' => 'CapacityPictureController@masiveLoad']);

   //CRUD ComplementaryServiceFood
   $router->post('/complementaryservicefood', ['uses' => 'ComplementaryServiceFoodController@post']);
   $router->get('/complementaryservicefood', ['uses' => 'ComplementaryServiceFoodController@get']);
   $router->get('/complementaryservicefood/paginate', ['uses' => 'ComplementaryServiceFoodController@paginate']);
   $router->get('/complementaryservicefood/backup', ['uses' => 'ComplementaryServiceFoodController@backup']);
   $router->put('/complementaryservicefood', ['uses' => 'ComplementaryServiceFoodController@put']);
   $router->delete('/complementaryservicefood', ['uses' => 'ComplementaryServiceFoodController@delete']);
   $router->post('/complementaryservicefood/masive_load', ['uses' => 'ComplementaryServiceFoodController@masiveLoad']);

   //CRUD ComplementaryServiceFoodType
   $router->post('/complementaryservicefoodtype', ['uses' => 'ComplementaryServiceFoodTypeController@post']);
   $router->get('/complementaryservicefoodtype', ['uses' => 'ComplementaryServiceFoodTypeController@get']);
   $router->get('/complementaryservicefoodtype/paginate', ['uses' => 'ComplementaryServiceFoodTypeController@paginate']);
   $router->get('/complementaryservicefoodtype/backup', ['uses' => 'ComplementaryServiceFoodTypeController@backup']);
   $router->put('/complementaryservicefoodtype', ['uses' => 'ComplementaryServiceFoodTypeController@put']);
   $router->delete('/complementaryservicefoodtype', ['uses' => 'ComplementaryServiceFoodTypeController@delete']);
   $router->post('/complementaryservicefoodtype/masive_load', ['uses' => 'ComplementaryServiceFoodTypeController@masiveLoad']);

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

   //CRUD InspectionAssigment
   $router->post('/inspectionassigment', ['uses' => 'InspectionAssigmentController@post']);
   $router->get('/inspectionassigment', ['uses' => 'InspectionAssigmentController@get']);
   $router->get('/inspectionassigment/paginate', ['uses' => 'InspectionAssigmentController@paginate']);
   $router->get('/inspectionassigment/backup', ['uses' => 'InspectionAssigmentController@backup']);
   $router->put('/inspectionassigment', ['uses' => 'InspectionAssigmentController@put']);
   $router->delete('/inspectionassigment', ['uses' => 'InspectionAssigmentController@delete']);
   $router->post('/inspectionassigment/masive_load', ['uses' => 'InspectionAssigmentController@masiveLoad']);

   //CRUD ApprovalStateAttachment
   $router->post('/approvalstateattachment', ['uses' => 'ApprovalStateAttachmentController@post']);
   $router->get('/approvalstateattachment', ['uses' => 'ApprovalStateAttachmentController@get']);
   $router->get('/approvalstateattachment/paginate', ['uses' => 'ApprovalStateAttachmentController@paginate']);
   $router->get('/approvalstateattachment/backup', ['uses' => 'ApprovalStateAttachmentController@backup']);
   $router->put('/approvalstateattachment', ['uses' => 'ApprovalStateAttachmentController@put']);
   $router->delete('/approvalstateattachment', ['uses' => 'ApprovalStateAttachmentController@delete']);
   $router->post('/approvalstateattachment/masive_load', ['uses' => 'ApprovalStateAttachmentController@masiveLoad']);

   //CRUD InspectorReport
   $router->post('/inspectorreport', ['uses' => 'InspectorReportController@post']);
   $router->get('/inspectorreport', ['uses' => 'InspectorReportController@get']);
   $router->get('/inspectorreport/paginate', ['uses' => 'InspectorReportController@paginate']);
   $router->get('/inspectorreport/backup', ['uses' => 'InspectorReportController@backup']);
   $router->put('/inspectorreport', ['uses' => 'InspectorReportController@put']);
   $router->delete('/inspectorreport', ['uses' => 'InspectorReportController@delete']);
   $router->post('/inspectorreport/masive_load', ['uses' => 'InspectorReportController@masiveLoad']);

   //CRUD InspectorReportAttachment
   $router->post('/inspectorreportattachment', ['uses' => 'InspectorReportAttachmentController@post']);
   $router->get('/inspectorreportattachment', ['uses' => 'InspectorReportAttachmentController@get']);
   $router->get('/inspectorreportattachment/paginate', ['uses' => 'InspectorReportAttachmentController@paginate']);
   $router->get('/inspectorreportattachment/backup', ['uses' => 'InspectorReportAttachmentController@backup']);
   $router->put('/inspectorreportattachment', ['uses' => 'InspectorReportAttachmentController@put']);
   $router->delete('/inspectorreportattachment', ['uses' => 'InspectorReportAttachmentController@delete']);
   $router->post('/inspectorreportattachment/masive_load', ['uses' => 'InspectorReportAttachmentController@masiveLoad']);
});
