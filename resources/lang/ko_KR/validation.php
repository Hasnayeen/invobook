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

    'accepted'             => ':attribute 는(은) 반드시 허용되어야합니다.',
    'active_url'           => ':attribute 는(은) 올바른 URL이 아닙니다.',
    'after'                => ':attribute 는(은) 반드시 :date 이후여야합니다.',
    'after_or_equal'       => ':attribute 는(은) 반드시 :date 이후이거나 같아야합니다.',
    'alpha'                => ':attribute 는(은) 문자만 포함할 수 있습니다.',
    'alpha_dash'           => ':attribute 는(은) 문자, 숫자, 대쉬만 포함할 수 있습니다.',
    'alpha_num'            => ':attribute 는(은) 문자나 숫자만 포함할 수 있습니다.',
    'array'                => ':attribute 는(은) 반드시 배열이어야합니다.',
    'before'               => ':attribute 는(은) 반드시 :date 이전이어야합니다.',
    'before_or_equal'      => ':attribute 는(은) 반드시 :date 이전이거나 같아야합니다.',
    'between'              => [
        'numeric' => ':attribute 는(은) 반드시 :min 와 :max 사이여야합니다.',
        'file'    => ':attribute 는(은) 반드시 :min 와 :max 사이의 킬로바이트여야합니다.',
        'string'  => ':attribute 는(은) 반드시 :min 와 :max 사이의 글자 수여야합니다.',
        'array'   => ':attribute 는(은) 반드시 :min 와 :max 사이의 개수여야합니다.',
    ],
    'boolean'              => ':attribute 값은 반드시 참 혹은 거짓이어야합니다.',
    'confirmed'            => ':attribute 확인 값이 일치하지 않습니다.',
    'date'                 => ':attribute 는(은) 올바른 날짜 값이 아닙니다.',
    'date_format'          => ':attribute 가 포맷과 다릅니다 :format .',
    'different'            => ':attribute 와 :other는 반드시 달라야합니다.',
    'digits'               => ':attribute 는(은) 반드시 :digits 자리여야합니다.',
    'digits_between'       => ':attribute 는(은) 반드시 :min 와 :max 사이의 자리 수여야합니다.',
    'dimensions'           => ':attribute 가 유효하지 않은 가로세로의 길이를 갖고 있습니다.',
    'distinct'             => ':attribute 의 항목이 중복된 값을 갖고 있습니다.',
    'email'                => ':attribute 는(은) 반드시 유효한 이메일 주소여야합니다.',
    'exists'               => '선택된 :attribute 가 유효하지 않습니다.',
    'file'                 => ':attribute 는(은) 반드시 파일이어야합니다.',
    'filled'               => ':attribute 는(은) 필수 항목입니다.',
    'image'                => ':attribute 는(은) 반드시 이미지여야합니다.',
    'in'                   => '선택된 :attribute 가 유효하지 않습니다.',
    'in_array'             => ':attribute 항목이 :other 에 존재하지 않습니다.',
    'integer'              => ':attribute 는(은) 반드시 정수여야 합니다.',
    'ip'                   => ':attribute 는(은) 반드시 유효한 IP Address여야합니다.',
    'json'                 => ':attribute 는(은) 반드시 유효한 JSON 스트링이어야합니다.',
    'max'                  => [
        'numeric' => ':attribute는(은) :max 보다 크지 않아야합니다.',
        'file'    => ':attribute는(은) :max 킬로바이트보다 크지 않아야합니다.',
        'string'  => ':attribute는(은) :max 글자 수보다 길지 않아야합니다.',
        'array'   => ':attribute는(은) :max 개보다 많지 않아야합니다.',
    ],
    'mimes'                => ':attribute 는(은) 반드시 :values 타입이어야합니다.',
    'mimetypes'            => ':attribute 는(은) 반드시 :values 타입이어야합니다.',
    'min'                  => [
        'numeric' => ':attribute 는 최소 :min 이어야 합니다.',
        'file'    => ':attribute 는 최소 :min 킬로바이트이어야 합니다.',
        'string'  => ':attribute 는 최소 :min 글자 수여야 합니다.',
        'array'   => ':attribute 는 최소 :min 개여야 합니다.',
    ],
    'not_in'               => '선택된 :attribute 가 유효하지 않습니다.',
    'numeric'              => ':attribute 는 반드시 숫자여야합니다.',
    'present'              => ':attribute 항목은 반드시 있어야합니다.',
    'regex'                => ':attribute 포맷이 유효하지 않습니다.',
    'required'             => ':attribute 는 필수 항목입니다.',
    'required_if'          => ':attribute 항목은 :other 이 :value 일 때 필수항목입니다.',
    'required_unless'      => ':attribute 항목은 :other 이 :value 에 있지 않은 한 필수항목입니다.',
    'required_with'        => ':attribute 항목은 :value 가 있을 때 필수항목입니다.',
    'required_with_all'    => ':attribute 항목은 :value 가 있을 때 필수항목입니다.',
    'required_without'     => ':attribute 항목은 :value 가 없을 때 필수항목입니다.',
    'required_without_all' => ':attribute 항목은 어떠한 :value 도 없을 때 필수항목입니다.',
    'same'                 => ':attribute 와 :other 는 반드시 일치해야합니다.',
    'size'                 => [
        'numeric' => ':attribute 는 반드시 :size 여야 합니다.',
        'file'    => ':attribute 는 반드시 :size 킬로바이트여야합니다.',
        'string'  => ':attribute 는 반드시 :size 글자 수여야합니다.',
        'array'   => ':attribute 는 반드시 :size 개를 포함해야합니다.',
    ],
    'string'               => ':attribute 는 반드시 문자열이여야합니다.',
    'timezone'             => ':attribute 는 반드시 유효한 시간대여야합니다.',
    'unique'               => ':attribute 는 이미 사용 중입니다.',
    'uploaded'             => ':attribute 업로드에 실패하였습니다.',
    'url'                  => ':attribute 포맷이 유효하지 않습니다.',

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
