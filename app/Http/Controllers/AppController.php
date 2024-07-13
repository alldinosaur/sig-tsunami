<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\AppModel;
use App\Models\KeluhanModel;

class AppController extends Controller
{
    public function index(){
        $data = AppModel::get();
        return view('index', compact('data'));
    }

    public function simpanData() {
        $data = simplexml_load_file("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.xml") or die("Gagal ambil!");
        // print_r($data);
        DB::beginTransaction();
        try {
            foreach ($data->gempa as $gempaM5) {
                
            }

        } catch (\Exception $e) {
            DB::rollback();
                return response()->json([
                    'status' => 'gagal',
                    'message' => $e->getMessage()
                ]);
        }
        return  print_r($data);
    }
}
