<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Project;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileTest extends TestCase
{
    /** @test */
    public function user_can_upload_files()
    {
        Storage::fake('');
        $project = factory(Project::class)->create();
        $file = UploadedFile::fake()->create('features.pdf');

        $this->actingAs($this->user)->post('files', [
            'files'         => [$file],
            'fileable_type' => 'project',
            'fileable_id'   => $project->id,
            ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Files uploaded successfully',
             ]);
        Storage::disk()->assertExists('features.pdf');
    }
}
