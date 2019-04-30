<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\InspectorReportAttachment;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class InspectorReportAttachmentController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(InspectorReportAttachment::get(),200);
       } else {
          $inspectorreportattachment = InspectorReportAttachment::findOrFail($id);
          $attach = [];
          return response()->json(["InspectorReportAttachment"=>$inspectorreportattachment, "attach"=>$attach],200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(InspectorReportAttachment::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $inspectorreportattachment = new InspectorReportAttachment();
          $lastInspectorReportAttachment = InspectorReportAttachment::orderBy('id')->get()->last();
          if($lastInspectorReportAttachment) {
             $inspectorreportattachment->id = $lastInspectorReportAttachment->id + 1;
          } else {
             $inspectorreportattachment->id = 1;
          }
          $inspectorreportattachment->inspector_report_attachment_file_type = $result['inspector_report_attachment_file_type'];
          $inspectorreportattachment->inspector_report_attachment_file_name = $result['inspector_report_attachment_file_name'];
          $inspectorreportattachment->inspector_report_attachment_file = $result['inspector_report_attachment_file'];
          $inspectorreportattachment->inspector_report_id = $result['inspector_report_id'];
          $inspectorreportattachment->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($inspectorreportattachment,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $inspectorreportattachment = InspectorReportAttachment::where('id',$result['id'])->update([
             'inspector_report_attachment_file_type'=>$result['inspector_report_attachment_file_type'],
             'inspector_report_attachment_file_name'=>$result['inspector_report_attachment_file_name'],
             'inspector_report_attachment_file'=>$result['inspector_report_attachment_file'],
             'inspector_report_id'=>$result['inspector_report_id'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($inspectorreportattachment,200);
    }

    function delete(Request $data)
    {
       $id = $data['id'];
       return InspectorReportAttachment::destroy($id);
    }

    function backup(Request $data)
    {
       $inspectorreportattachments = InspectorReportAttachment::get();
       $toReturn = [];
       foreach( $inspectorreportattachments as $inspectorreportattachment) {
          $attach = [];
          array_push($toReturn, ["InspectorReportAttachment"=>$inspectorreportattachment, "attach"=>$attach]);
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
         $result = $row['InspectorReportAttachment'];
         $exist = InspectorReportAttachment::where('id',$result['id'])->first();
         if ($exist) {
           InspectorReportAttachment::where('id', $result['id'])->update([
             'inspector_report_attachment_file_type'=>$result['inspector_report_attachment_file_type'],
             'inspector_report_attachment_file_name'=>$result['inspector_report_attachment_file_name'],
             'inspector_report_attachment_file'=>$result['inspector_report_attachment_file'],
             'inspector_report_id'=>$result['inspector_report_id'],
           ]);
         } else {
          $inspectorreportattachment = new InspectorReportAttachment();
          $inspectorreportattachment->id = $result['id'];
          $inspectorreportattachment->inspector_report_attachment_file_type = $result['inspector_report_attachment_file_type'];
          $inspectorreportattachment->inspector_report_attachment_file_name = $result['inspector_report_attachment_file_name'];
          $inspectorreportattachment->inspector_report_attachment_file = $result['inspector_report_attachment_file'];
          $inspectorreportattachment->inspector_report_id = $result['inspector_report_id'];
          $inspectorreportattachment->save();
         }
       }
       DB::commit();
      } catch (Exception $e) {
         return response()->json($e,400);
      }
      return response()->json('Task Complete',200);
    }
}