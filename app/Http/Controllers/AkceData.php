<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;
 
class AkceData extends Controller
{
    public function GetAkceData() { // Has to be withoutVerifying because it thinks it has invalid ssl
        $k = Http::withoutVerifying()->get('https://services6.arcgis.com/fUWVlHWZNxUvTUh8/arcgis/rest/services/Events/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')->json()['features'];

        $myArray = array();

        for ($i = 0; $i < Count($k); $i++) {
            $myArray[] = $k[$i]['properties'];
        }

        return $myArray;
    }
}
