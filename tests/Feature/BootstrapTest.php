<?php

declare(strict_types=1);

it('exposes a health check endpoint', function (): void {
    $response = $this->get('/up');

    $response->assertOk();
});

it('renders api exceptions as json', function (): void {
    $response = $this->get('/api/missing');

    $response->assertNotFound()
        ->assertHeader('Content-Type', 'application/json');
});
