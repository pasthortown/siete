<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\InspectionAssigment;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class InspectionAssigmentController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(InspectionAssigment::get(),200);
       } else {
          $inspectionassigment = InspectionAssigment::findOrFail($id);
          $attach = [];
          return response()->json(["InspectionAssigment"=>$inspectionassigment, "attach"=>$attach],200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(InspectionAssigment::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $inspectionassigment = new InspectionAssigment();
          $lastInspectionAssigment = InspectionAssigment::orderBy('id')->get()->last();
          if($lastInspectionAssigment) {
             $inspectionassigment->id = $lastInspectionAssigment->id + 1;
          } else {
             $inspectionassigment->id = 1;
          }
          $inspectionassigment->id_user_inspector = $result['id_user_inspector'];
          $inspectionassigment->date_assigment = $result['date_assigment'];
          $inspectionassigment->date_inspection = $result['date_inspection'];
          $inspectionassigment->register_id = $result['register_id'];
          $inspectionassigment->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($inspectionassigment,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $inspectionassigment = InspectionAssigment::where('id',$result['id'])->update([
             'id_user_inspector'=>$result['id_user_inspector'],
             'date_assigment'=>$result['date_assigment'],
             'date_inspection'=>$result['date_inspection'],
             'register_id'=>$result['register_id'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($inspectionassigment,200);
    }

    function delete(Request $data)
    {
       $id = $data['id'];
       return InspectionAssigment::destroy($id);
    }

    function backup(Request $data)
    {
       $inspectionassigments = InspectionAssigment::get();
       $toReturn = [];
       foreach( $inspectionassigments as $inspectionassigment) {
          $attach = [];
          array_push($toReturn, ["InspectionAssigment"=>$inspectionassigment, "attach"=>$attach]);
       }
       return response()->json($toReturn,200);
    }

    function masiveLoad(Request $data)
    {
      $incomming = $data->json()->all();
      $masiveData = $incomming['data'];
      try{
       DB::beginTransaction();
       foreach($masiveData as $row) {
         $result = $row['InspectionAssigment'];
         $exist = InspectionAssigment::where('id',$result['id'])->first();
         if ($exist) {
           InspectionAssigment::where('id', $result['id'])->update([
             'id_user_inspector'=>$result['id_user_inspector'],
             'date_assigment'=>$result['date_assigment'],
             'date_inspection'=>$result['date_inspection'],
             'register_id'=>$result['register_id'],
           ]);
         } else {
          $inspectionassigment = new InspectionAssigment();
          $inspectionassigment->id = $result['id'];
          $inspectionassigment->id_user_inspector = $result['id_user_inspector'];
          $inspectionassigment->date_assigment = $result['date_assigment'];
          $inspectionassigment->date_inspection = $result['date_inspection'];
          $inspectionassigment->register_id = $result['register_id'];
          $inspectionassigment->save();
         }
       }
       DB::commit();
      } catch (Exception $e) {
         return response()->json($e,400);
      }
      return response()->json('Task Complete',200);
    }
}