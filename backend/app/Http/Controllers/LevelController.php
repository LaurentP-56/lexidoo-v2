<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Illuminate\Http\Response;

class LevelController extends Controller
{
    public function index()
    {
        $levels = Level::all();
        return response()->json($levels);
    }
}
