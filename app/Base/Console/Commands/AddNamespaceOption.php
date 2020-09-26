<?php

namespace App\Base\Console\Commands;

use Symfony\Component\Console\Input\InputOption;

trait AddNamespaceOption
{
    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['namespace', 'ns', InputOption::VALUE_OPTIONAL, 'Specify the namespace for the generated class'],
        ];
    }
}
