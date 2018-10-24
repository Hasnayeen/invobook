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

    'accepted'             => ':attribute kabuledilmeli.',
    'active_url'           => ':attribute geçerli bir URL değil.',
    'after'                => ':attribute  :date den sonra olmalı.',
    'after_or_equal'       => ':attribute :date den sonra ya da aynı tarihte olmalı.',
    'alpha'                => ':attribute yalnızca harfler içerebilir.',
    'alpha_dash'           => ':attribute yalnızca harfler, sayılar ve kesik çizgiler içerebilir.',
    'alpha_num'            => ':attribute yalnızca harfler ve sayılar içerebilir.',
    'array'                => ':attribute dizin(array) olmalıdır.',
    'before'               => ':attribute  :date den önce olmalıdır.',
    'before_or_equal'      => ':attribute  :date den önce veya aynı tarihte olmalıdır.',
    'between'              => [
        'numeric' => ':attribute :min ile :max arasında bir sayı olmalıdır.',
        'file'    => ':attribute :min ile :max arasında kilobytes olmalıdır.',
        'string'  => ':attribute :min ile :max karakter sayısında bir değer olmalıdır.',
        'array'   => ':attribute :min ile :max madde içelmeli.',
    ],
    'boolean'              => ':attribute alanı true ya da false olmalı.',
    'confirmed'            => ':attribute onay eşleştirilemedi.',
    'date'                 => ':attribute geçerli bir tarih değil.',
    'date_format'          => ':attribute :format formatına uygun değil.',
    'different'            => ':attribute ve :other farklı değer olmalı.',
    'digits'               => ':attribute :digits rakam olmalı.',
    'digits_between'       => ':attribute :min ve :max arasında bir sayı olmalı.',
    'dimensions'           => ':attribute görseli geçersiz ölçeklendirmeye sahip.',
    'distinct'             => ':attribute alanı mükerrer değer.',
    'email'                => ':attribute geçerli bir email adresi olmalı.',
    'exists'               => 'Seçilen :attribute geçerli değil.',
    'file'                 => ':attribute bir dosya olmalı.',
    'filled'               => ':attribute alanı gerekli bir alan.',
    'image'                => ':attribute bir görüntü olmalı.',
    'in'                   => 'Seçilen :attribute geçerli değil.',
    'in_array'             => ':attribute degeri :other da bulunmamakta.',
    'integer'              => ':attribute tam sayı olmalı.',
    'ip'                   => ':attribute geçerli bir IP adresi olmalı.',
    'json'                 => ':attribute geçerli bir JSON dizi(string) olmalı.',
    'max'                  => [
        'numeric' => ':attribute :max den daha buyuk bir değer olmamalı.',
        'file'    => ':attribute :max den daha fala kilobytes olmamalı.',
        'string'  => ':attribute :max den daha fazla karakter içermemeli .',
        'array'   => ':attribute :max den daha falza parça içermemeli.',
    ],
    'mimes'                => ':attribute  :values dosya tipinde olmalıdır.',
    'mimetypes'            => ':attribute  :values dosya tipinde olmalıdır.',
    'min'                  => [
        'numeric' => ':attribute en az :min olmalıdır.',
        'file'    => ':attribute en az :min kilobytes olmalıdır.',
        'string'  => ':attribute en az :min karakter içermelidir.',
        'array'   => ':attribute en az :min parça içermelidir.',
    ],
    'not_in'               => 'Seçilen :attribute değeri gerli değil.',
    'numeric'              => ':attribute sayısal değer olmak zorunda',
    'present'              => ':attribute alanı mevcut olmalı.',
    'regex'                => ':attribute gerli bir formatta değil.',
    'required'             => ':attribute alanı gerekli.',
    'required_if'          => ':other değeri :value ise :attribute alanı gereklidir.',
    'required_unless'      => ':other değeri :value değil ise :attribute alanı gereklidir.',
    'required_with'        => ':attribute alanı :values mevcut ise gereklidir.',
    'required_with_all'    => ':attribute alanı :values mevcut ise gereklidir.',
    'required_without'     => ':attribute alanı :values mevcut değil ise gereklidir.',
    'required_without_all' => ':attribute alanı :values dan hiç biri mevcut değil ise gereklidir.',
    'same'                 => ':attribute ve :other aralarında eşleşmelidir.',
    'size'                 => [
        'numeric' => ':attribute :size kadar olmalıdır.',
        'file'    => ':attribute :size kilobytes kadar olmalıdır.',
        'string'  => ':attribute :size karakter uzunluğunda olmalıdır.',
        'array'   => ':attribute :size parça içermelidir.',
    ],
    'string'               => ':attribute bir dizi(string) olmalıdır .',
    'timezone'             => ':attribute geçerli bir zaman dilimi olmalıdır.',
    'unique'               => ':attribute değeri başka bir yerde zaten kullanılıyor.',
    'uploaded'             => ':attribute yüklenemedi.',
    'url'                  => ':attribute geçerli bir formatta değil.',

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
