<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => 'ফের :attribute মেনে নিতে হবে ।',
    'active_url'           => 'ফের :attribute একটি বৈধ URL নয় ।',
    'after'                => 'ফের :attribute পরে ডেট করতে হবে :date |',
    'after_or_equal'       => 'ফের :attribute এর পরে বা সমান একটি তারিখ হতে হবে :date |',
    'alpha'                => 'ফের :attribute শুধুমাত্র অক্ষর ধারণ করতে পারে ।',
    'alpha_dash'           => 'ফের :attribute শুধুমাত্র অক্ষর, সংখ্যা, এবং dashes থাকতে পারে ।',
    'alpha_num'            => 'ফের :attribute শুধুমাত্র অক্ষর এবং সংখ্যা ধারণ করতে পারে ।',
    'array'                => 'ফের :attribute একটি অ্যারে হতে হবে ।',
    'before'               => 'ফের :attribute আগে ডেট করতে হবে :date |',
    'before_or_equal'      => 'ফের :attribute আগে বা সমান একটি তারিখ হতে হবে :date |',
    'between'              => [
        'numeric' => 'ফের :attribute এর মধ্যে হতে হবে :min এবং :max |',
        'file'    => 'ফের :attribute এর মধ্যে হতে হবে :min এবং :max কিলসাইট |',
        'string'  => 'ফের :attribute এর মধ্যে হতে হবে :min এবং :max অক্ষর |',
        'array'   => 'ফের :attribute মধ্যে থাকতে হবে :min এবং :max বিষয়োপকরণ |',
    ],
    'boolean'              => 'ফের :attribute ক্ষেত্র সত্য বা মিথ্যা হতে হবে ।',
    'confirmed'            => 'ফের :attribute কনফার্মেশন মিলছে না ।',
    'date'                 => 'ফের :attribute বৈধ তারিখ নয় ।',
    'date_format'          => 'ফের :attribute ফরম্যাট মেলে না :format |',
    'different'            => 'ফের :attribute এবং :other আলাদা হতে হবে ।',
    'digits'               => 'ফের :attribute হতে হবে :digits সংখ্যা |',
    'digits_between'       => 'ফের :attribute এর মধ্যে হতে হবে :min এবং :max সংখ্যা |',
    'dimensions'           => 'ফের :attribute অকার্যকর ইমেজ মাত্রা আছে |',
    'distinct'             => 'ফের :attribute ক্ষেত্রটির একটি ডুপ্লিকেট মূল্য আছে ।',
    'email'                => 'ফের :attribute অবশ্যই একটি বৈধ ইমেইল ঠিকানা হতে হবে ।',
    'exists'               => 'ফের নির্বাচিত :attribute অবৈধ ।',
    'file'                 => 'ফের :attribute অবশ্যই একটি ফাইল ।',
    'filled'               => 'ফের :attribute ফিল্ড প্রয়োজন ।',
    'image'                => 'ফের :attribute অবশ্যই ইমেজ ।',
    'in'                   => 'ফের নির্বাচিত :attribute অবৈধ ।',
    'in_array'             => 'ফের :attribute ক্ষেত্রের অস্তিত্ব নেই :other |',
    'integer'              => 'ফের :attribute অবশ্যই পূর্ণসংখ্যা হতে হবে ।',
    'ip'                   => 'ফের :attribute অবশ্যই একটি বৈধ IP ঠিকানা হতে হবে ।',
    'json'                 => 'ফের :attribute অবশ্যই একটি বৈধ জসন স্ট্রিং ।',
    'max'                  => [
        'numeric' => 'ফের :attribute চেয়ে বড় নাও হতে পারে :max |',
        'file'    => 'ফের :attribute চেয়ে বড় নাও হতে পারে :max কিলওসাইট |',
        'string'  => 'ফের :attribute চেয়ে বড় নাও হতে পারে :max অক্ষর |',
        'array'   => 'ফের :attribute থাকতে হবে অন্তত :max বিষয়োপকরণ |',
    ],
    'mimes'                => 'ফের :attribute একটি ফাইল হতে হবে টাইপ: :values |',
    'mimetypes'            => 'ফের :attribute একটি ফাইল হতে হবে টাইপ: :values |',
    'min'                  => [
        'numeric' => 'ফের :attribute হতে হবে অন্তত :min |',
        'file'    => 'ফের :attribute হতে হবে অন্তত :min কিলসাইট |',
        'string'  => 'ফের :attribute হতে হবে অন্তত :min অক্ষর |',
        'array'   => 'ফের :attribute থাকতে হবে অন্তত :min বিষয়োপকরণ |',
    ],
    'not_in'               => 'ফের নির্বাচিত :attribute অবৈধ ।',
    'numeric'              => 'ফের :attribute অবশ্যই একটি সংখ্যা ।',
    'present'              => 'ফের :attribute মাঠে উপস্থিত থাকতে হবে ।',
    'regex'                => 'ফের :attribute ফরম্যাট অকার্যকর.',
    'required'             => 'ফের :attribute ফিল্ড প্রয়োজন ।',
    'required_if'          => 'ফের :attribute fফিল্ড প্রয়োজন হয় যখন :other হয় :value |',
    'required_unless'      => 'ফের :attribute ক্ষেত্র প্রয়োজন হয় যদি না :other হয়  ইঞ্চি :values |',
    'required_with'        => 'ফের :attribute ফিল্ড প্রয়োজন হয় যখন :values হয় বর্তমান |',
    'required_with_all'    => 'ফের :attribute ফিল্ড প্রয়োজন হয় যখন :values হয় বর্তমান |',
    'required_without'     => 'ফের :attribute ফিল্ড প্রয়োজন হয় যখন :values হয় উপস্থিত হননি ।',
    'required_without_all' => 'ফের :attribute ফিল্ড প্রয়োজন হয় যখন কোনওটাই :values উপস্থিত থাকেন ।',
    'same'                 => 'ফের :attribute এবং :other অবশ্যই মিলবে ।',
    'size'                 => [
        'numeric' => 'ফের :attribute হতে হবে :size |',
        'file'    => 'ফের :attribute হতে হবে :size কিলসাইট |',
        'string'  => 'ফের :attribute হতে হবে :size অক্ষর |',
        'array'   => 'ফের :attribute ধারণ করতে হবে :size বিষয়োপকরণ |',
    ],
    'string'               => 'ফের :attribute হতে হবে একটি স্ট্রিং ।',
    'timezone'             => 'ফের :attribute হতে হবে একটি বৈধ অঞ্চল ।',
    'unique'               => 'ফের :attribute আগেই নেওয়া হয়েছে ।',
    'uploaded'             => 'ফের :attribute আপলোড করতে ব্যর্থ হয়েছে ।',
    'url'                  => 'ফের :attribute ফরম্যাট অকার্যকর |',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],
];
