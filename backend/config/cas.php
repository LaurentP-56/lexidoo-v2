<?php
return [
    'cas_host' => 'idp-auth.partenaire.test-gar.education.fr',
    'cas_port' => 443, // Port HTTPS standard
    'cas_context' => '', // Mettre à jour si nécessaire
    'cas_server_ca_cert_path' => storage_path('certs/lexidoo.fr.cer'), // Votre certificat .cer
    // ...
];
