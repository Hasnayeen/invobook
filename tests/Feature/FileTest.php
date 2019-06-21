<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Core\Models\File;
use App\Core\Models\Project;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Core\Exceptions\InvalidFileFormat;

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
            'group_type'    => 'project',
            'group_id'      => $project->id,
        ])
             ->assertJsonFragment([
                 'status'  => 'success',
                 'message' => 'Files uploaded successfully',
             ]);
        Storage::disk('public')->assertExists('features.pdf');
    }

    /** @test */
    public function user_can_upload_only_allowed_format_files()
    {
        $this->expectException(InvalidFileFormat::class);
        Storage::fake('');
        $project = factory(Project::class)->create();
        $file = UploadedFile::fake()->create('features.doc');

        $this->actingAs($this->user)->post('files', [
            'files'         => [$file],
            'group_type'    => 'project',
            'group_id'      => $project->id,
        ]);
        Storage::disk('public')->assertMissing('features.doc');
    }

    /** @test */
    public function same_file_is_not_saved_twice_on_a_group()
    {
        Storage::fake('');
        $project = factory(Project::class)->create();
        $file = UploadedFile::fake()->create('features.pdf');

        $this->actingAs($this->user)->post('files', [
            'files'         => [$file],
            'group_type'    => 'project',
            'group_id'      => $project->id,
        ]);
        $this->post('files', [
            'files'         => [$file],
            'group_type'    => 'project',
            'group_id'      => $project->id,
        ]);

        $hash = md5_file($file);
        $count = File::where([
            'hash'          => $hash,
            'fileable_type' => 'project',
            'fileable_id'   => $project->id,
        ])->get()->count();
        $this->assertEquals(1, $count);
    }

    /** @test */
    public function user_can_view_files()
    {
        Storage::fake('');
        $project = factory(Project::class)->create();
        $file1 = UploadedFile::fake()->create('features.pdf');
        $file2 = UploadedFile::fake()->create('versions.jpeg');

        $this->actingAs($this->user)->post('files', [
            'files'         => [$file1, $file2],
            'group_type'    => 'project',
            'group_id'      => $project->id,
        ]);

        $this->actingAs($this->user)->call('GET', 'files', [
            'group_type' => 'project',
            'group_id'   => $project->id,
        ])
             ->assertJson([
                 'files' => [
                     [
                         'name'          => 'features.pdf',
                         'path'          => 'features.pdf',
                         'fileable_type' => 'project',
                         'fileable_id'   => $project->id,
                     ],
                     [
                         'name'          => 'versions.jpeg',
                         'path'          => 'versions.jpeg',
                         'fileable_type' => 'project',
                         'fileable_id'   => $project->id,
                     ],
                 ],
             ]);
    }
}
