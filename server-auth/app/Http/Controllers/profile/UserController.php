<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\User;
use App\AccountRolAssigment;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    function get(Request $data)
    {
       $id = $data['id'];
       if ($id == null) {
          return response()->json(User::get(),200);
       } else {
          return response()->json(User::findOrFail($id),200);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(User::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $user = new User();
          $user->name = $result['name'];
          $user->email = $result['email'];
          $user->address = $result['address'];
          $user->address_map_latitude = $result['address_map_latitude'];
          $user->address_map_longitude = $result['address_map_longitude'];
          $user->main_phone_number = $result['main_phone_number'];
          $user->secondary_phone_number = $result['secondary_phone_number'];
          $user->identification = $result['identification'];
          $user->ruc = $result['ruc'];
          $user->password = Crypt::encrypt($request['password']);
          $user->api_token = $result['api_token'];
          $user->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($user,200);
    }

    function register_user_establishment(Request $data)
    {
      $result = $data->json()->all();
      $token = $data->header('api_token');
      $anotherPreviewUser = User::where('email', $result['email'])->first();
      if($anotherPreviewUser){
         return response()->json($anotherPreviewUser->id, 200);
      }
      try{
         DB::beginTransaction();
         $new_password = str_random(10);
         $user = new User();
         $lastUser = User::orderBy('id')->get()->last();
         if($lastUser) {
              $user->id = $lastUser->id + 1;
         } else {
              $user->id = 1;
         }
         $user->name = $result['name'];
         $user->email = $result['email'];
         $user->main_phone_number = $result['main_phone_number'];
         $user->secondary_phone_number = $result['secondary_phone_number'];
         $user->identification = $result['identification'];
         $user->password = Crypt::encrypt($new_password);
         $user->api_token = str_random(64);
         $user->save();
         $accountrolassigment = new AccountRolAssigment();
         $lastAccountRolAssigment = AccountRolAssigment::orderBy('id')->get()->last();
         if($lastAccountRolAssigment) {
            $accountrolassigment->id = $lastAccountRolAssigment->id + 1;
         } else {
            $accountrolassigment->id = 1;
         }
         $accountrolassigment->account_rol_id = 4;
         $accountrolassigment->user_id = $user->id;
         $accountrolassigment->save();
         DB::commit();
         return response()->json($user->id,200);
      } catch (Exception $e) {
         return response()->json($e,400);
      }
    }

    function update_user_establishment(Request $data)
    {
      $result = $data->json()->all();
      $anotherPreviewUser = User::where('email', $result['email'])->first();
      $previewUser = User::where('id',$result['id'])->first();
      if($anotherPreviewUser){
         if($previewUser->email != $anotherPreviewUser->email){
            return response()->json("0", 200);
         }else {
            return response()->json($anotherPreviewUser->id,200);
         }
      }
      try{
         DB::beginTransaction();
         $new_password = str_random(10);
         $user = User::where('id',$result['id'])->update([
            'name'=>$result['name'],
            'email'=>$result['email'],
            'main_phone_number'=>$result['main_phone_number'],
            'secondary_phone_number'=>$result['secondary_phone_number'],
            'identification'=>$result['identification'],
            'password'=>Crypt::encrypt($new_password),
            'api_token'=>str_random(64),
         ]);
         DB::commit();
         $this->send_mail($result['email'], $user->name, $subject, $message, env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
         return response()->json($user->id,200);
      } catch (Exception $e) {
         return response()->json($e,400);
      }
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $user = User::where('id',$result['id'])->update([
             'name'=>$result['name'],
             'email'=>$result['email'],
             'address'=>$result['address'],
             'address_map_latitude'=>$result['address_map_latitude'],
             'address_map_longitude'=>$result['address_map_longitude'],
             'main_phone_number'=>$result['main_phone_number'],
             'secondary_phone_number'=>$result['secondary_phone_number'],
             'identification'=>$result['identification'],
             'ruc'=>$result['ruc'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($user,200);
    }

    function delete(Request $data)
    {
       $result = $data->json()->all();
       $id = $result['id'];
       return User::destroy($id);
    }

    function filteredByRol(Request $data) {
      $rol_id = $data['filter'];
      $ruc = $data['ruc'];
      $size = $data['size'];
      if($ruc === 'all'){
         return response()->json(AccountRolAssigment::where('account_rol_id', $rol_id)->select('users.id', 'users.name', 'users.email', 'users.identification', 'users.ruc')->join('users', 'users.id', '=', 'account_rol_assigments.user_id')->paginate($size),200);
      }
      return response()->json(AccountRolAssigment::where('account_rol_id', $rol_id)->select('users.id', 'users.name', 'users.email', 'users.identification', 'users.ruc')->join('users', 'users.id', '=', 'account_rol_assigments.user_id')->where('users.ruc', 'ilike', '%'.$ruc.'%')->paginate($size),200);
    }

    function getByRol(Request $data) {
      $rol_id = $data['filter'];
      return response()->json(AccountRolAssigment::where('account_rol_id', $rol_id)->join('users', 'users.id', '=', 'account_rol_assigments.user_id')->select('users.id', 'users.name', 'users.email', 'users.identification')->orderby('users.name', 'ASC')->get(),200);
    }

    function createAccountByRol(Request $data) {
      $result = $data->json()->all();
      $user = $result['user'];
      $email = $user['email'];
      $name = $user['name'];
      $account_rol_id = $result['account_rol_id'];
      $new_password = str_random(10);
      try{
         DB::beginTransaction();
         $user = new User();
         $lastUser = User::orderBy('id')->get()->last();
         if($lastUser) {
            $user->id = $lastUser->id + 1;
         } else {
            $user->id = 1;
         }
         $user->name = $name;
         $user->email = $email;
         $user->identification = $result['user']['identification'];
         $user->ruc = ($account_rol_id == 2) ? $result['user']['ruc'] : '';
         $user->password = Crypt::encrypt($new_password);
         $user->api_token = str_random(64);
         $user->save();
         $accountrolassigment = new AccountRolAssigment();
         $lastAccountRolAssigment = AccountRolAssigment::orderBy('id')->get()->last();
         if($lastAccountRolAssigment) {
            $accountrolassigment->id = $lastAccountRolAssigment->id + 1;
         } else {
            $accountrolassigment->id = 1;
         }
         $accountrolassigment->account_rol_id = $account_rol_id;
         $accountrolassigment->user_id = $user->id;
         $accountrolassigment->save();
         DB::commit();
         $message = "Tu nueva contraseña es " . $new_password;
         if($account_rol_id == 2) {
            $message = "Para administrar el RUC " . $result['user']['ruc'] . ", Tu nueva contraseña es " . $new_password;
         }
         $subject = "Te damos la bienvenida a " . env('MAIL_FROM_NAME');
         return $this->send_mail($email, $name, $subject, $message, env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
      } catch (Exception $e) {
         return response()->json($e,400);
      }
    }

    function deleteAccountByRol(Request $data) {
      $user_id = $data['user_id'];
      $account_rol_id = $data['account_rol_id'];
      $account_rol_assigment = AccountRolAssigment::where('account_rol_id', $account_rol_id)->where('user_id', $user_id)->first();
      AccountRolAssigment::destroy($account_rol_assigment->id);
      $account_rol_assigment = AccountRolAssigment::where('user_id', $user_id)->first();
      if(!$account_rol_assigment){
         User::destroy($user_id);
      }
      return response()->json(true,200);
    }

    function updateAccountByRol(Request $data) {
      $result = $data->json()->all();
      $email = $result['user']['email'];
      $name = $result['user']['name'];
      $account_rol_id = $result['account_rol_id'];
      $new_password = str_random(10);
      $message = "Tu nueva contraseña es " . $new_password;
      if($account_rol_id == 2) {
         $message = "Para administrar el RUC " . $result['user']['ruc'] . ", Tu nueva contraseña es " . $new_password;
      }
      $subject = "Cambiamos tus datos " . env('MAIL_FROM_NAME');
      try{
         DB::beginTransaction();
         $user = User::where('id', $result['user']['id'])->update([
            'name'=>$name,
            'email'=>$email,
            'identification'=>$result['user']['identification'],
            'ruc'=>($account_rol_id == 2) ? $result['user']['ruc'] : '',
            'password'=>Crypt::encrypt($new_password),
            'api_token'=>str_random(64),
         ]);
         DB::commit();
         return $this->send_mail($email, $name, $subject, $message, env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
      } catch (Exception $e) {
         return response()->json($e,400);
      }
    }
    
    protected function send_mail($to, $toAlias, $subject, $body, $fromMail, $fromAlias) {
      $data = ['name'=>$toAlias, 'body'=>$body, 'appName'=>env('MAIL_FROM_NAME')];
      Mail::send('mail', $data, function($message) use ($to, $toAlias, $subject, $fromMail,$fromAlias) {
        $message->to($to, $toAlias)->subject($subject);
        $message->from($fromMail,$fromAlias);
      });
      return response()->json("Success!",200);
    }

    protected function httpGet($url, $data=NULL, $headers = NULL, $token) {
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      if(!empty($data)){
          curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
      }
      $headersSend = array();
      array_push($headersSend, 'api_token:'.$token);
      curl_setopt($ch, CURLOPT_HTTPHEADER, $headersSend);
      $response = curl_exec($ch);
      if (curl_error($ch)) {
          trigger_error('Curl Error:' . curl_error($ch));
      }
      curl_close($ch);
      return $response;
   }
}