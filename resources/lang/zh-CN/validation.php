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

    'accepted'             => '这个 :attribute 必须被接受.',
    'active_url'           => '这个 :attribute 不是有效的资源定位符(URL).',
    'after'                => '这个 :attribute 必须在 :date 这个日期之后.',
    'after_or_equal'       => '这个 :attribute 必须等于或者在 :date 这个日期之后.',
    'alpha'                => '这个 :attribute 只能包含字母.',
    'alpha_dash'           => '这个 :attribute 只能包含字母，数字，和破折号.',
    'alpha_num'            => '这个 :attribute 只能包含字母和数字.',
    'array'                => '这个 :attribute 必须是个数组.',
    'before'               => '这个 :attribute 必须在 :date 这个日期之前.',
    'before_or_equal'      => '这个 :attribute 必须等于或者在 :date 这个日期之前.',
    'between'              => [
        'numeric' => '这个 :attribute 必须在 :min 和 :max 之间.',
        'file'    => '这个 :attribute 必须在 :min 和 :max 千字节之间.',
        'string'  => '这个 :attribute 必须在 :min 和 :max 字符之间.',
        'array'   => '这个 :attribute 必须在 :min 和 :max 项目之间.',
    ],
    'boolean'              => '这个 :attribute 区域必须填正确或者错误.',
    'confirmed'            => '这个 :attribute 确认信息不匹配.',
    'date'                 => '这个 :attribute 不是有效的日期.',
    'date_format'          => '这个 :attribute 不符合 :format 格式.',
    'different'            => '这个 :attribute 和 :other 必须不一样.',
    'digits'               => '这个 :attribute 必须是 :digits 数字.',
    'digits_between'       => '这个 :attribute 必须在 :min 和 :max 数字之间.',
    'dimensions'           => '这个 :attribute 有无效的图像尺寸.',
    'distinct'             => '这个 :attribute 区域有一个重复的值.',
    'email'                => '这个 :attribute 必须是一个有效的电子邮箱地址.',
    'exists'               => '这个被选中的 :attribute 是无效的.',
    'file'                 => '这个 :attribute 必须是一个文件.',
    'filled'               => '这个 :attribute 区域是必需的.',
    'image'                => '这个 :attribute 必须是一个图像.',
    'in'                   => '这个被选中的 :attribute 是无效的.',
    'in_array'             => '这个 :attribute 区域在 :other 里不存在.',
    'integer'              => '这个 :attribute 必须是个整数.',
    'ip'                   => '这个 :attribute 必须是有效的互联网协议(IP)地址.',
    'json'                 => '这个 :attribute 必须是有效的 JSON 字符串.',
    'max'                  => [
        'numeric' => '这个 :attribute 不能大于 :max.',
        'file'    => '这个 :attribute 不能大于 :max 千字节.',
        'string'  => '这个 :attribute 不能超过 :max 字符.',
        'array'   => '这个 :attribute 不能超过 :max 项目.',
    ],
    'mimes'                => '这个 :attribute 必须是 :values 文件类型.',
    'mimetypes'            => '这个 :attribute 必须是 :values 文件类型.',
    'min'                  => [
        'numeric' => '这个 :attribute 必须大于 :min.',
        'file'    => '这个 :attribute 必须大于 :min 千字节.',
        'string'  => '这个 :attribute 必须超过 :min 字符.',
        'array'   => '这个 :attribute 必须超过 :min 项目.',
    ],
    'not_in'               => '这个被选中的 :attribute 是无效的.',
    'numeric'              => '这个 :attribute 必须是个数字.',
    'present'              => '这个 :attribute 区域必须是现在.',
    'regex'                => '这个 :attribute 格式是无效的.',
    'required'             => '这个 :attribute 区域是必需的.',
    'required_if'          => '当 :other 是 :value 时, 这个 :attribute 区域是必需的.',
    'required_unless'      => '这个 :attribute 区域是必需的, 除非 :other 在 :values 里.',
    'required_with'        => '当 :values 是现在时, 这个 :attribute 区域是必需的.',
    'required_with_all'    => '当 :values 是现在时, 这个 :attribute 区域是必需的.',
    'required_without'     => '当 :values 不是现在时, 这个 :attribute 区域是必需的.',
    'required_without_all' => '当所有 :values 都不是现在时, 这个 :attribute 区域是必需的.',
    'same'                 => '这个 :attribute 和 :other 必须符合.',
    'size'                 => [
        'numeric' => '这个 :attribute 必须是 :size.',
        'file'    => '这个 :attribute 必须是 :size 千字节.',
        'string'  => '这个 :attribute 必须是 :size 字符.',
        'array'   => '这个 :attribute 必须有 :size 项目.',
    ],
    'string'               => '这个 :attribute 必须是一个字符串.',
    'timezone'             => '这个 :attribute 必须是一个有效的时区.',
    'unique'               => '这个 :attribute 已经被使用.',
    'uploaded'             => '这个 :attribute 上传失败.',
    'url'                  => '这个 :attribute 格式是无效的.',

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
