<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\InspectorReport;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class InspectorReportController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(InspectorReport::get(),200);
       } else {
          $inspectorreport = InspectorReport::findOrFail($id);
          $attach = [];
          return response()->json(["InspectorReport"=>$inspectorreport, "attach"=>$attach],200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(InspectorReport::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $inspectorreport = new InspectorReport();
          $lastInspectorReport = InspectorReport::orderBy('id')->get()->last();
          if($lastInspectorReport) {
             $inspectorreport->id = $lastInspectorReport->id + 1;
          } else {
             $inspectorreport->id = 1;
          }
          $inspectorreport->body = $result['body'];
          $inspectorreport->params = $result['params'];
          $inspectorreport->inspection_assigment_id = $result['inspection_assigment_id'];
          $inspectorreport->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($inspectorreport,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $inspectorreport = InspectorReport::where('id',$result['id'])->update([
             'body'=>$result['body'],
             'params'=>$result['params'],
             'inspection_assigment_id'=>$result['inspection_assigment_id'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($inspectorreport,200);
    }

    function delete(Request $data)
    {
       $id = $data['id'];
       return InspectorReport::destroy($id);
    }

    function backup(Request $data)
    {
       $inspectorreports = InspectorReport::get();
       $toReturn = [];
       foreach( $inspectorreports as $inspectorreport) {
          $attach = [];
          array_push($toReturn, ["InspectorReport"=>$inspectorreport, "attach"=>$attach]);
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
         $result = $row['InspectorReport'];
         $exist = InspectorReport::where('id',$result['id'])->first();
         if ($exist) {
           InspectorReport::where('id', $result['id'])->update([
             'body'=>$result['body'],
             'params'=>$result['params'],
             'inspection_assigment_id'=>$result['inspection_assigment_id'],
           ]);
         } else {
          $inspectorreport = new InspectorReport();
          $inspectorreport->id = $result['id'];
          $inspectorreport->body = $result['body'];
          $inspectorreport->params = $result['params'];
          $inspectorreport->inspection_assigment_id = $result['inspection_assigment_id'];
          $inspectorreport->save();
         }
       }
       DB::commit();
      } catch (Exception $e) {
         return response()->json($e,400);
      }
      return response()->json('Task Complete',200);
    }
}