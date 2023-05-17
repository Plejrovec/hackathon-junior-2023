<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;
 
class AkceData extends Controller
{
    public function GetAkceData() { // Has to be withoutVerifying because it thinks it has invalid ssl
        $ar = Http::withoutVerifying()->get('https://services6.arcgis.com/fUWVlHWZNxUvTUh8/arcgis/rest/services/Events/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')->json()['features'];
        
        $apiKey = "AIzaSyAK7PSYID6RF8xxyKp6n4PX80vuqArD_QA"; // Replace with your Google Maps Geocoding API key

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            $d = $ar[$i]['properties'];
            $words = explode(',', $d['categories']);

            $words = array_map('trim', $words);

            $d['categories'] = $words[0];

            $timestamp = $d['date_from'] / 1000;
            $date = date('Y-m-d', strtotime('@' . $timestamp));

            $d['date_from'] = $date;

            $timestamp = $d['date_to'] / 1000;
            $date = date('Y-m-d', strtotime('@' . $timestamp));

            $d['date_to'] = $date;

            $response = Http::withoutVerifying()->get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".$d['latitude'].",".$d['longitude']."&key=".$apiKey)->json();
            
            $d["Address"] = $response;

            $myArray[] = $d;
        }

        return $myArray;
    }

    public function FilterBy($string, $ar) {
        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == $string) {
                $myArray[] = $ar[$i];
            }
        }

        return $myArray;
    }

    public function GetDivadla() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Divadlo", $ar);;
    }

    public function GetFilm() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Film", $ar);;
    }

    public function GetHudba() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Hudba", $ar);;
    }

    public function GetTIC() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Akce TIC Brno", $ar);;
    }

    public function GetProRodiny() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Pro rodiny", $ar);;
    }

    public function GetVeletrhy() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Veletrhy / vzdělávací", $ar);
    }

    public function GetVystavy() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Výstava", $ar);;
    }

    public function GetNocniZivot() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Noční život", $ar);
    }

    public function GetTOP() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("TOP akce", $ar);
    }

    public function GetFestivaly() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Festivaly", $ar);;
    }

    public function GetGastronomicke() {
        $ar = $this->GetAkceData();

        return $this->FilterBy("Gastronomické", $ar);;
    }
}
