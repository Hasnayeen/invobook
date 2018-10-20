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

    'accepted'             => ':attribute باید تایید شود.',
    'active_url'           => ':attribute یک آدرس معتبر نیست.',
    'after'                => ':attribute باید بعد از تاریخ :date باشد.',
    'after_or_equal'       => ':attribute باید یک تاریخ بعد یا مساوی با :date باشد.',
    'alpha'                => ':attribute ممکن است فقط شامل حروف باشد.',
    'alpha_dash'           => ':attribute ممکن است فقط شامل حروف، اعداد و علامت ها باشد.',
    'alpha_num'            => ':attribute ممکن است فقط شامل حروف و اعداد باشد.',
    'array'                => ':attribute باید یک آرایه باشد.',
    'before'               => ':attribute باید یک تاریخ قبل از :date باشد.',
    'before_or_equal'      => ':attribute باید یک تاریخ قبل با مساوی با :date باشد.',
    'between'              => [
        'numeric' => ':attribute باید بین :min و :max باشد.',
        'file'    => ':attribute باید بین :min و :max کیلوبایت باشد.',
        'string'  => ':attribute باید بین :min و :max کاراکتر باشد.',
        'array'   => ':attribute باید بین :min و :max آیتم باشد.',
    ],
    'boolean'              => 'فیلد :attribute باید true یا false باشد.',
    'confirmed'            => 'تایید :attribute مطابقت ندارد.',
    'date'                 => ':attribute یک تاریخ معتبر نیست.',
    'date_format'          => ':attribute با فرمت :format مطابقت ندارد.',
    'different'            => ':attribute و :other باید متفاوت باشند.',
    'digits'               => ':attribute باید اعداد :digits باشد.',
    'digits_between'       => ':attribute باید بین اعداد :min و :max باشد.',
    'dimensions'           => ':attribute ابعاد تصویر اشتباه دارد.',
    'distinct'             => 'فیلد :attribute مقدار تکراری دارد.',
    'email'                => ':attribute باید یک آدرس ایمیل معتبر باشد.',
    'exists'               => ':attribute انتخاب شده نامعتبر است.',
    'file'                 => ':attribute باید یک فایل باشد.',
    'filled'               => 'فیلد :attribute مورد نیاز است.',
    'image'                => ':attribute باید یک تصویر باشد.',
    'in'                   => ':attribute انتخاب شده نامعتبر است.',
    'in_array'             => 'فیلد :attribute در :other وجود ندارد.',
    'integer'              => ':attribute باید عدد باشد.',
    'ip'                   => ':attribute باید یک آدرس IP معتبر باشد.',
    'json'                 => ':attribute باید یک متن JSON معتبر باشد.',
    'max'                  => [
        'numeric' => ':attribute نباید بزرگتر از :max باشد.',
        'file'    => ':attribute نباید بزرگتر از :max کیلوبایت باشد.',
        'string'  => ':attribute نباید بزرگتر از :max کاراکتر باشد.',
        'array'   => ':attribute نباید بیشتر از :max آیتم باشد.',
    ],
    'mimes'                => ':attribute باید یک فایل از نوع :values باشد.',
    'mimetypes'            => ':attribute باید یک فایل از نوع :values باشد.',
    'min'                  => [
        'numeric' => ':attribute باید حداقل :min باشد.',
        'file'    => ':attribute باید حداقل :min کیلوبایت باشد.',
        'string'  => ':attribute باید حداقل :min کاراکتر باشد.',
        'array'   => ':attribute باید حداقل :min آیتم باشد.',
    ],
    'not_in'               => ':attribute انتخاب شده نامعتبر است.',
    'numeric'              => ':attribute باید یک عدد باشد.',
    'present'              => 'فیلد :attribute باید موجود باشد.',
    'regex'                => 'فرمت :attribute نامعتبر است.',
    'required'             => 'فیلد :attribute مورد نیاز است.',
    'required_if'          => 'وقتی :other  برابر :value است، فیلد :attribute مورد نیاز است.',
    'required_unless'      => 'فیلد :attribute مورد نیاز است مگر اینکه :other در :values باشد.',
    'required_with'        => 'فیلد :attribute مورد نیاز است وقتی که :values موجود باشد.',
    'required_with_all'    => 'فیلد :attribute مورد نیاز است وقتی که :values موجود باشد.',
    'required_without'     => 'فیلد :attribute مورد نیاز است وقتی که :values موجود نیست.',
    'required_without_all' => 'فیلد :attribute مورد نیاز است وقتی که هیچ یک از :values موجود نباشد.',
    'same'                 => 'attribute و :other باید یکسان باشند.',
    'size'                 => [
        'numeric' => ':attribute باید :size باشد.',
        'file'    => ':attribute باید :size کیلوبایت باشد.',
        'string'  => ':attribute باید :size کاراکتر باشد.',
        'array'   => ':attribute باید شامل :size آیتم باشد.',
    ],
    'string'               => ':attribute باید متن باشد.',
    'timezone'             => ':attribute باید یک منطقه معتبر باشد.',
    'unique'               => ':attribute قبلا گرفته شده است.',
    'uploaded'             => ':attribute در آپلود دچار مشکل شده است.',
    'url'                  => 'فرمت :attribute نامعتر است.',

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
