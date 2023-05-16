<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Http\Controllers\AkceData;

class DataTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $akceData = new AkceData();
        $yo = $akceData->GetAkceData();

        dd($yo);
    }
}
