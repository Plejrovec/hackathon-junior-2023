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
    public function test_AkceData(): void
    {
        $akceData = new AkceData();
        $yo = $akceData->GetAkceData();

        dd($yo);
    }

    public function test_RouteForData()
    {
        $response = $this->get('/api/events');
        dd($response);
        // Add more assertions as needed
    }
}
