<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\FranchiseChainName;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FranchiseChainNameController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(FranchiseChainName::get(),200);
       } else {
          $franchisechainname = FranchiseChainName::findOrFail($id);
          $attach = [];
          return response()->json(["FranchiseChainName"=>$franchisechainname, "attach"=>$attach],200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(FranchiseChainName::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $franchisechainname = new FranchiseChainName();
          $lastFranchiseChainName = FranchiseChainName::orderBy('id')->get()->last();
          if($lastFranchiseChainName) {
             $franchisechainname->id = $lastFranchiseChainName->id + 1;
          } else {
             $franchisechainname->id = 1;
          }
          $franchisechainname->name = $result['name'];
          $franchisechainname->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($franchisechainname,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $franchisechainname = FranchiseChainName::where('id',$result['id'])->update([
             'name'=>$result['name'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($franchisechainname,200);
    }

    function delete(Request $data)
    {
       $id = $data['id'];
       return FranchiseChainName::destroy($id);
    }

    function backup(Request $data)
    {
       $franchisechainnames = FranchiseChainName::get();
       $toReturn = [];
       foreach( $franchisechainnames as $franchisechainname) {
          $attach = [];
          array_push($toReturn, ["FranchiseChainName"=>$franchisechainname, "attach"=>$attach]);
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
         $result = $row['FranchiseChainName'];
         $exist = FranchiseChainName::where('id',$result['id'])->first();
         if ($exist) {
           FranchiseChainName::where('id', $result['id'])->update([
             'name'=>$result['name'],
           ]);
         } else {
          $franchisechainname = new FranchiseChainName();
          $franchisechainname->id = $result['id'];
          $franchisechainname->name = $result['name'];
          $franchisechainname->save();
         }
       }
       DB::commit();
      } catch (Exception $e) {
         return response()->json($e,400);
      }
      return response()->json('Task Complete',200);
    }
}