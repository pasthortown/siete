<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\Declaration;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class DeclarationController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(Declaration::get(),200);
       } else {
          $declaration = Declaration::findOrFail($id);
          $attach = [];
          $declaration_item_values_on_declaration = $declaration->DeclarationItemValues()->get();
          array_push($attach, ["declaration_item_values_on_declaration"=>$declaration_item_values_on_declaration]);
          $approval_states_on_declaration = $declaration->ApprovalStates()->get();
          array_push($attach, ["approval_states_on_declaration"=>$approval_states_on_declaration]);
          return response()->json(["Declaration"=>$declaration, "attach"=>$attach],200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(Declaration::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $declaration = new Declaration();
          $lastDeclaration = Declaration::orderBy('id')->get()->last();
          if($lastDeclaration) {
             $declaration->id = $lastDeclaration->id + 1;
          } else {
             $declaration->id = 1;
          }
          $declaration->establishment_id = $result['establishment_id'];
          $declaration->declaration_date = $result['declaration_date'];
          $declaration->year = $result['year'];
          $declaration->max_date_to_pay = $result['max_date_to_pay'];
          $declaration->save();
          $declaration_item_values_on_declaration = $result['declaration_item_values_on_declaration'];
          foreach( $declaration_item_values_on_declaration as $declaration_item_value) {
             $declaration->DeclarationItemValues()->attach($declaration_item_value['id']);
          }
          $approval_states_on_declaration = $result['approval_states_on_declaration'];
          foreach( $approval_states_on_declaration as $approval_state) {
             $declaration->ApprovalStates()->attach($approval_state['id']);
          }
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($declaration,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $declaration = Declaration::where('id',$result['id'])->update([
             'establishment_id'=>$result['establishment_id'],
             'declaration_date'=>$result['declaration_date'],
             'year'=>$result['year'],
             'max_date_to_pay'=>$result['max_date_to_pay'],
          ]);
          $declaration = Declaration::where('id',$result['id'])->first();
          $declaration_item_values_on_declaration = $result['declaration_item_values_on_declaration'];
          $declaration_item_values_on_declaration_old = $declaration->DeclarationItemValues()->get();
          foreach( $declaration_item_values_on_declaration_old as $declaration_item_value_old ) {
             $delete = true;
             foreach( $declaration_item_values_on_declaration as $declaration_item_value ) {
                if ( $declaration_item_value_old->id === $declaration_item_value['id'] ) {
                   $delete = false;
                }
             }
             if ( $delete ) {
                $declaration->DeclarationItemValues()->detach($declaration_item_value_old->id);
             }
          }
          foreach( $declaration_item_values_on_declaration as $declaration_item_value ) {
             $add = true;
             foreach( $declaration_item_values_on_declaration_old as $declaration_item_value_old) {
                if ( $declaration_item_value_old->id === $declaration_item_value['id'] ) {
                   $add = false;
                }
             }
             if ( $add ) {
                $declaration->DeclarationItemValues()->attach($declaration_item_value['id']);
             }
          }
          $declaration = Declaration::where('id',$result['id'])->first();
          $approval_states_on_declaration = $result['approval_states_on_declaration'];
          $approval_states_on_declaration_old = $declaration->ApprovalStates()->get();
          foreach( $approval_states_on_declaration_old as $approval_state_old ) {
             $delete = true;
             foreach( $approval_states_on_declaration as $approval_state ) {
                if ( $approval_state_old->id === $approval_state['id'] ) {
                   $delete = false;
                }
             }
             if ( $delete ) {
                $declaration->ApprovalStates()->detach($approval_state_old->id);
             }
          }
          foreach( $approval_states_on_declaration as $approval_state ) {
             $add = true;
             foreach( $approval_states_on_declaration_old as $approval_state_old) {
                if ( $approval_state_old->id === $approval_state['id'] ) {
                   $add = false;
                }
             }
             if ( $add ) {
                $declaration->ApprovalStates()->attach($approval_state['id']);
             }
          }
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($declaration,200);
    }

    function delete(Request $data)
    {
       $id = $data['id'];
       return Declaration::destroy($id);
    }

    function backup(Request $data)
    {
       $declarations = Declaration::get();
       $toReturn = [];
       foreach( $declarations as $declaration) {
          $attach = [];
          $declaration_item_values_on_declaration = $declaration->DeclarationItemValues()->get();
          array_push($attach, ["declaration_item_values_on_declaration"=>$declaration_item_values_on_declaration]);
          $approval_states_on_declaration = $declaration->ApprovalStates()->get();
          array_push($attach, ["approval_states_on_declaration"=>$approval_states_on_declaration]);
          array_push($toReturn, ["Declaration"=>$declaration, "attach"=>$attach]);
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
         $result = $row['Declaration'];
         $exist = Declaration::where('id',$result['id'])->first();
         if ($exist) {
           Declaration::where('id', $result['id'])->update([
             'establishment_id'=>$result['establishment_id'],
             'declaration_date'=>$result['declaration_date'],
             'year'=>$result['year'],
             'max_date_to_pay'=>$result['max_date_to_pay'],
           ]);
         } else {
          $declaration = new Declaration();
          $declaration->id = $result['id'];
          $declaration->establishment_id = $result['establishment_id'];
          $declaration->declaration_date = $result['declaration_date'];
          $declaration->year = $result['year'];
          $declaration->max_date_to_pay = $result['max_date_to_pay'];
          $declaration->save();
         }
         $declaration = Declaration::where('id',$result['id'])->first();
         $declaration_item_values_on_declaration = [];
         foreach($row['attach'] as $attach){
            $declaration_item_values_on_declaration = $attach['declaration_item_values_on_declaration'];
         }
         $declaration_item_values_on_declaration_old = $declaration->DeclarationItemValues()->get();
         foreach( $declaration_item_values_on_declaration_old as $declaration_item_value_old ) {
            $delete = true;
            foreach( $declaration_item_values_on_declaration as $declaration_item_value ) {
               if ( $declaration_item_value_old->id === $declaration_item_value['id'] ) {
                  $delete = false;
               }
            }
            if ( $delete ) {
               $declaration->DeclarationItemValues()->detach($declaration_item_value_old->id);
            }
         }
         foreach( $declaration_item_values_on_declaration as $declaration_item_value ) {
            $add = true;
            foreach( $declaration_item_values_on_declaration_old as $declaration_item_value_old) {
               if ( $declaration_item_value_old->id === $declaration_item_value['id'] ) {
                  $add = false;
               }
            }
            if ( $add ) {
               $declaration->DeclarationItemValues()->attach($declaration_item_value['id']);
            }
         }
         $declaration = Declaration::where('id',$result['id'])->first();
         $approval_states_on_declaration = [];
         foreach($row['attach'] as $attach){
            $approval_states_on_declaration = $attach['approval_states_on_declaration'];
         }
         $approval_states_on_declaration_old = $declaration->ApprovalStates()->get();
         foreach( $approval_states_on_declaration_old as $approval_state_old ) {
            $delete = true;
            foreach( $approval_states_on_declaration as $approval_state ) {
               if ( $approval_state_old->id === $approval_state['id'] ) {
                  $delete = false;
               }
            }
            if ( $delete ) {
               $declaration->ApprovalStates()->detach($approval_state_old->id);
            }
         }
         foreach( $approval_states_on_declaration as $approval_state ) {
            $add = true;
            foreach( $approval_states_on_declaration_old as $approval_state_old) {
               if ( $approval_state_old->id === $approval_state['id'] ) {
                  $add = false;
               }
            }
            if ( $add ) {
               $declaration->ApprovalStates()->attach($approval_state['id']);
            }
         }
       }
       DB::commit();
      } catch (Exception $e) {
         return response()->json($e,400);
      }
      return response()->json('Task Complete',200);
    }
}