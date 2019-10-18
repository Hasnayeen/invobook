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

    'accepted'             => 'The :attribute mesti diterima.',
    'active_url'           => 'The :attribute bukan URL yang sah.',
    'after'                => 'The :attribute mestilah tarikh selepas :date.',
    'after_or_equal'       => 'The :attribute mestilah tarikh selepas atau sama dengan :date.',
    'alpha'                => 'The :attribute hanya boleh mengandungi huruf.',
    'alpha_dash'           => 'The :attribute hanya boleh mengandungi huruf, nombor, dan tanda kutip.',
    'alpha_num'            => 'The :attribute hanya boleh mengandungi huruf dan nombor.',
    'array'                => 'The :attribute mesti menjadi array.',
    'before'               => 'The :attribute mestilah tarikh sebelum ini :date.',
    'before_or_equal'      => 'The :attribute mestilah tarikh sebelum atau sama :date.',
    'between'              => [
        'numeric' => 'The :attribute mestilah di antara :min dan :max.',
        'file'    => 'The :attribute mestilah di antara :min dan :max kilobytes.',
        'string'  => 'The :attribute mestilah di antara :min dan :max watak.',
        'array'   => 'The :attribute mestilah mempunyai antara :min dan :max barangan.',
    ],
    'boolean'              => 'The :attribute medan mestilah benar atau palsu.',
    'confirmed'            => 'The :attribute pengesahan tidak sepadan.',
    'date'                 => 'The :attribute bukan tarikh yang sah.',
    'date_format'          => 'The :attribute tidak sepadan dengan format :format.',
    'different'            => 'The :attribute dan :other mestilah berbeza.',
    'digits'               => 'The :attribute mesti :digits digit.',
    'digits_between'       => 'The :attribute mestilah di antara :min dan :max digit.',
    'dimensions'           => 'The :attribute mempunyai dimensi imej yang tidak sah.',
    'distinct'             => 'The :attribute medan mempunyai nilai pendua.',
    'email'                => 'The :attribute Mesti alamat e-mel yang sah.',
    'exists'               => 'The dipilih :attribute tidak sah.',
    'file'                 => 'The :attribute mesti menjadi fail.',
    'filled'               => 'The :attribute bidang diperlukan.',
    'image'                => 'The :attribute mestilah imej.',
    'in'                   => 'The dipilih :attribute tidak sah.',
    'in_array'             => 'The :attribute medan tidak wujud :other.',
    'integer'              => 'The :attribute mestilah integer.',
    'ip'                   => 'The :attribute mestilah alamat IP yang sah.',
    'json'                 => 'The :attribute mestilah rentetan JSON yang sah.',
    'max'                  => [
        'numeric' => 'The :attribute mungkin tidak lebih besar daripada :max.',
        'file'    => 'The :attribute mungkin tidak lebih besar daripada :max kilobytes.',
        'string'  => 'The :attribute mungkin tidak lebih besar daripada :max watak.',
        'array'   => 'The :attribute mungkin tidak mempunyai lebih daripada :max barangan.',
    ],
    'mimes'                => 'The :attribute mestilah file jenis: :values.',
    'mimetypes'            => 'The :attribute mestilah file jenis: :values.',
    'min'                  => [
        'numeric' => 'The :attribute mesti sekurang-kurangnya :min.',
        'file'    => 'The :attribute mesti sekurang-kurangnya :min kilobytes.',
        'string'  => 'The :attribute mesti sekurang-kurangnya :min watak.',
        'array'   => 'The :attribute mesti mempunyai sekurang-kurangnya :min barangan.',
    ],
    'not_in'               => 'The dipilih :attribute tidak sah.',
    'numeric'              => 'The :attribute mestilah nombor.',
    'present'              => 'The :attribute medan mesti hadir.',
    'regex'                => 'The :attribute format tidak sah.',
    'required'             => 'The :attribute bidang diperlukan.',
    'required_if'          => 'The :attribute medan diperlukan apabila :other adalah :value.',
    'required_unless'      => 'The :attribute medan diperlukan melainkan :other adalah dalam :values.',
    'required_with'        => 'The :attribute medan diperlukan apabila :values hadir.',
    'required_with_all'    => 'The :attribute medan diperlukan apabila :values hadir',
    'required_without'     => 'The :attribute medan diperlukan apabila :values tidak hadir',
    'required_without_all' => 'The :attribute medan diperlukan apabila tiada :values hadir.',
    'same'                 => 'The :attribute dan :other mesti sepadan.',
    'size'                 => [
        'numeric' => 'The :attribute mesti :size.',
        'file'    => 'The :attribute mesti :size kilobytes.',
        'string'  => 'The :attribute mesti :size watak.',
        'array'   => 'The :attribute mesti mengandungi :size barangan.',
    ],
    'string'               => 'The :attribute mesti tali.',
    'timezone'             => 'The :attribute mestilah zon yang sah.',
    'unique'               => 'The :attribute telah diambil.',
    'uploaded'             => 'The :attribute gagal untuk memuat naik.',
    'url'                  => 'The :attribute format tidak sah.',

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
