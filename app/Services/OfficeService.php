<?php

namespace App\Services;

use App\Repositories\OfficeRepository;

class OfficeService
{
    /**
     * @var mixed
     */
    protected $officeRepository;

    /**
     * @param OfficeRepository $officeRepository
     */
    public function __construct(OfficeRepository $officeRepository)
    {
        $this->officeRepository = $officeRepository;
    }

    /**
     * @return mixed
     */
    public function getLatestThreeOffice()
    {
        return $this->officeRepository->getLatestThreeOffice();
    }
}
