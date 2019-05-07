<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\Pay;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PayController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(Pay::get(),200);
       } else {
          $pay = Pay::findOrFail($id);
          $attach = [];
          return response()->json(["Pay"=>$pay, "attach"=>$attach],200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(Pay::paginate($size),200);
    }

    function get_by_ruc_id(Request $data)
    {
       $id = $data['id'];
       return response()->json(Pay::where('ruc_id', $id)->orderBy('created_at', 'DESC')->get(),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $pay = new Pay();
          $lastPay = Pay::orderBy('id')->get()->last();
          if($lastPay) {
             $pay->id = $lastPay->id + 1;
          } else {
             $pay->id = 1;
          }
          $pay->amount_payed = $result['amount_payed'];
          $pay->amount_to_pay = $result['amount_to_pay'];
          $pay->pay_date = $result['pay_date'];
          $pay->payed = $result['payed'];
          $pay->code = $result['code'];
          $pay->max_pay_date = $result['max_pay_date'];
          $pay->ruc_id = $result['ruc_id'];
          $pay->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($pay,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $pay = Pay::where('id',$result['id'])->update([
             'amount_payed'=>$result['amount_payed'],
             'amount_to_pay'=>$result['amount_to_pay'],
             'pay_date'=>$result['pay_date'],
             'payed'=>$result['payed'],
             'code'=>$result['code'],
             'max_pay_date'=>$result['max_pay_date'],
             'ruc_id'=>$result['ruc_id'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($pay,200);
    }

    function delete(Request $data)
    {
       $id = $data['id'];
       return Pay::destroy($id);
    }

    function backup(Request $data)
    {
       $pays = Pay::get();
       $toReturn = [];
       foreach( $pays as $pay) {
          $attach = [];
          array_push($toReturn, ["Pay"=>$pay, "attach"=>$attach]);
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
         $result = $row['Pay'];
         $exist = Pay::where('id',$result['id'])->first();
         if ($exist) {
           Pay::where('id', $result['id'])->update([
             'amount_payed'=>$result['amount_payed'],
             'amount_to_pay'=>$result['amount_to_pay'],
             'pay_date'=>$result['pay_date'],
             'payed'=>$result['payed'],
             'code'=>$result['code'],
             'max_pay_date'=>$result['max_pay_date'],
             'ruc_id'=>$result['ruc_id'],
           ]);
         } else {
          $pay = new Pay();
          $pay->id = $result['id'];
          $pay->amount_payed = $result['amount_payed'];
          $pay->amount_to_pay = $result['amount_to_pay'];
          $pay->pay_date = $result['pay_date'];
          $pay->payed = $result['payed'];
          $pay->code = $result['code'];
          $pay->max_pay_date = $result['max_pay_date'];
          $pay->ruc_id = $result['ruc_id'];
          $pay->save();
         }
       }
       DB::commit();
      } catch (Exception $e) {
         return response()->json($e,400);
      }
      return response()->json('Task Complete',200);
    }
}
