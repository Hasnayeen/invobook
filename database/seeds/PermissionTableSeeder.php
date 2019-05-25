<?php

use Carbon\Carbon;
use App\Core\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        Permission::insert([
            [
                'action'     => 'view',
                'resource'   => 'project',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'create',
                'resource'   => 'project',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'update',
                'resource'   => 'project',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'project',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'view',
                'resource'   => 'team',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'create',
                'resource'   => 'team',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'update',
                'resource'   => 'team',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'team',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'view',
                'resource'   => 'office',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'create',
                'resource'   => 'office',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'update',
                'resource'   => 'office',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'office',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'view',
                'resource'   => 'task',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'create',
                'resource'   => 'task',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'update',
                'resource'   => 'task',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'task',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'view',
                'resource'   => 'discussion',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'create',
                'resource'   => 'discussion',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'update',
                'resource'   => 'discussion',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'discussion',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'view',
                'resource'   => 'message',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'create',
                'resource'   => 'message',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'update',
                'resource'   => 'message',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'message',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'view',
                'resource'   => 'event',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'create',
                'resource'   => 'event',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'update',
                'resource'   => 'event',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'event',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'view',
                'resource'   => 'file',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'upload',
                'resource'   => 'file',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'delete',
                'resource'   => 'file',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'add',
                'resource'   => 'member',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'remove',
                'resource'   => 'member',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'action'     => 'invite',
                'resource'   => 'user',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
