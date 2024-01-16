<?php

namespace App\Http\Responses;

class ApiResponse
{
    public static function success($data = null, $message = 'Operation Successful', $code = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    public static function error($message = 'Operation Failed', $code = 400)
    {
        return response()->json([
            'success' => false,
            'message' => $message,
        ], $code);
    }
}
