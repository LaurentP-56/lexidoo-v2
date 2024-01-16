<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testLogin()
    {
        $response = $this->post('/api/login', [
            'email' => 'test@test.me',
            'password' => 'Maglit3s',
        ]);

        $response->assertStatus(200);
        // Vous pouvez ajouter d'autres assertions ici pour vérifier le contenu de la réponse
    }
}
