<?php

return [
    /*
     * Permissions are set in 4 layers
     * First layer - app, admin
     * Second layer - project, team, office
     * Third layer - task, discussion, message, event, file
     * Fourth layer - comment
     */

    'app' => [
        'project' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],

        'team' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],

        'office' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],
    ],

    'project' => [
        'edit'       => true,
        'delete'     => true,
        'add-member' => true,
        'task'       => [
            'create'  => true,
            'edit'    => true,
            'delete'  => true,
            'comment' => [
                'create' => true,
                'edit'   => true,
                'delete' => true,
            ],
        ],
        'discussion' => [
            'create'  => true,
            'edit'    => true,
            'delete'  => true,
            'comment' => [
                'create' => true,
                'edit'   => true,
                'delete' => true,
            ],
        ],
        'message' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],
        'event' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],
        'file' => [
            'upload' => true,
            'delete' => true,
        ],
    ],

    'team' => [
        'edit'       => true,
        'delete'     => true,
        'add-member' => true,
        'task'       => [
            'create'  => true,
            'edit'    => true,
            'delete'  => true,
            'comment' => [
                'create' => true,
                'edit'   => true,
                'delete' => true,
            ],
        ],
        'discussion' => [
            'create'  => true,
            'edit'    => true,
            'delete'  => true,
            'comment' => [
                'create' => true,
                'edit'   => true,
                'delete' => true,
            ],
        ],
        'message' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],
        'event' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],
        'file' => [
            'upload' => true,
            'delete' => true,
        ],
    ],

    'office' => [
        'edit'       => true,
        'delete'     => true,
        'add-member' => true,
        'task'       => [
            'create'  => true,
            'edit'    => true,
            'delete'  => true,
            'comment' => [
                'create' => true,
                'edit'   => true,
                'delete' => true,
            ],
        ],
        'discussion' => [
            'create'  => true,
            'edit'    => true,
            'delete'  => true,
            'comment' => [
                'create' => true,
                'edit'   => true,
                'delete' => true,
            ],
        ],
        'message' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],
        'event' => [
            'create' => true,
            'edit'   => true,
            'delete' => true,
        ],
        'file' => [
            'upload' => true,
            'delete' => true,
        ],
    ],

    'admin' => [
        'view'          => true,
        'invite-member' => true,
        'invite-link'   => true,
    ],
];
