<?php

namespace App\Http\Controllers;

use Geocodio\Geocodio;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;
 
class AkceData extends Controller
{
    public function GetAkceData() { // Has to be withoutVerifying because it thinks it has invalid ssl
        $ar = Http::withoutVerifying()->get('https://services6.arcgis.com/fUWVlHWZNxUvTUh8/arcgis/rest/services/Events/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')->json()['features'];
        
        $myArray = array();

        $geocoder = new Geocodio();
        $geocoder->setApiKey('f9660e7a684ef446966a4b4400474b7e74f6a9b');
        $geodata = array();

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

            $geodata[] = [$d['latitude'], $d['longitude']];

            $myArray[] = $d;
        }

        // $results = $geocoder->reverse($geodata);
        // dd($results);
        // for ($i = 0; $i < Count($results); $i++) {
        //     $myArray[$i]["Address"] = $results[$i];
        // }

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
