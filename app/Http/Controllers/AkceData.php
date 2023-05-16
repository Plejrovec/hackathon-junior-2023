<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;
 
class AkceData extends Controller
{
    public function GetAkceData() { // Has to be withoutVerifying because it thinks it has invalid ssl
        $ar = Http::withoutVerifying()->get('https://services6.arcgis.com/fUWVlHWZNxUvTUh8/arcgis/rest/services/Events/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')->json()['features'];
        
        

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            $d = $ar[$i]['properties'];
            $words = explode(',', $d['categories']);

            $words = array_map('trim', $words);

            $d['categories'] = $words[0];

            $timestamp = $d['date_from'] / 1000;
            $date = date('Y-m-d H:i:s', strtotime('@' . $timestamp));

            $d['date_from'] = $date;

            $timestamp = $d['date_to'] / 1000;
            $date = date('Y-m-d H:i:s', strtotime('@' . $timestamp));

            $d['date_to'] = $date;

            $myArray[] = $d;
        }

        return $myArray;
    }

    public function GetDivadla() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Divadlo") {
                $myArray[] = $ar[$i];
            }
        }

        return $myArray;
    }

    public function GetFilm() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Film") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetHudba() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Hudba") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetTIC() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Akce TIC Brno") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetProRodiny() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Pro rodiny") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetVeletrhy() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Veletrhy / vzdělávací") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetVystavy() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Výstava") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetNocniZivot() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Noční život") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetTOP() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "TOP akce") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetFestivaly() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Festivaly") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }

    public function GetGastronomicke() {
        $ar = $this->GetAkceData();

        $myArray = array();

        for ($i = 0; $i < Count($ar); $i++) {
            if ($ar[$i]['categories'] == "Gastronomické") {
                $myArray[] = $ar[$i];
            }
        }
        
        return $myArray;
    }
}
