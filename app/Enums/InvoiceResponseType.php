<?php

namespace App\Enums;

enum InvoiceResponseType: string
{
    case URL = 'url';
    case STREAM = 'stream';
    case DOWNLOAD = 'download';
    case HTML = 'html';
}
