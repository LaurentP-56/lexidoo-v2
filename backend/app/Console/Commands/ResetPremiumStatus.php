<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class ResetPremiumStatus extends Command
{
    protected $signature = 'reset:premium';
    protected $description = 'Reset premium status for users whose subscription has expired';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $users = User::where('premium', 1)->where('finDuPremium', '<', now())->get();
        foreach ($users as $user) {
            $user->premium = 0;
            $user->save();
        }

        $this->info('Premium status reset successfully.');
    }
}
