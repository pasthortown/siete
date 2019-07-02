<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\template;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class templateController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(template::get(),200);
       } else {
          $template = template::findOrFail($id);
          $attach = [];
          return response()->json(["template"=>$template, "attach"=>$attach],200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(template::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $template = new template();
          $lasttemplate = template::orderBy('id')->get()->last();
          if($lasttemplate) {
             $template->id = $lasttemplate->id + 1;
          } else {
             $template->id = 1;
          }
          $template->body = $result['body'];
          $template->title = $result['title'];
          $template->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($template,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $template = template::where('id',$result['id'])->update([
             'body'=>$result['body'],
             'title'=>$result['title'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($template,200);
    }

    function delete(Request $data)
    {
       $id = $data['id'];
       return template::destroy($id);
    }

    function backup(Request $data)
    {
       $templates = template::get();
       $toReturn = [];
       foreach( $templates as $template) {
          $attach = [];
          array_push($toReturn, ["template"=>$template, "attach"=>$attach]);
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
         $result = $row['template'];
         $exist = template::where('id',$result['id'])->first();
         if ($exist) {
           template::where('id', $result['id'])->update([
             'body'=>$result['body'],
             'title'=>$result['title'],
           ]);
         } else {
          $template = new template();
          $template->id = $result['id'];
          $template->body = $result['body'];
          $template->title = $result['title'];
          $template->save();
         }
       }
       DB::commit();
      } catch (Exception $e) {
         return response()->json($e,400);
      }
      return response()->json('Task Complete',200);
    }
}