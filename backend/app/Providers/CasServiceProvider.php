<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class CasServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
   /* public function register(): void
    {
        //
    }
*/
    /**
     * Bootstrap services.
    */
    /*
    public function boot()
    {
        \phpCAS::client(CAS_VERSION_2_0, config('cas.cas_host'), config('cas.cas_port'), config('cas.cas_context'), true); // Ajout de true pour gérer les sessions

        \phpCAS::setCasServerCACert(config('cas.cas_server_ca_cert_path'));
    }
*/
}
