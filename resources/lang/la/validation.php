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

    'accepted'             => 'Quod :attribute oportet accepit.',
    'active_url'           => 'Quod :attribute non valet URL.',
    'after'                => 'Quod :attribute oportet fieri post diem :date.',
    'after_or_equal'       => 'Quod :attribute post diem esse aequalis :date.',
    'alpha'                => 'Quod :attribute litteris tantum potest continere.',
    'alpha_dash'           => 'Quod :attribute sed modo continet litterarum numerum atque adfigit.',
    'alpha_num'            => 'Quod :attribute tantum potest continere et epistolas numero.',
    'array'                => 'Quod :attribute oportet esse ordinata.',
    'before'               => 'Quod :attribute oportet ante diem :date.',
    'before_or_equal'      => 'Quod :attribute ante diem esse aequalis :date.',
    'between'              => [
        'numeric' => 'Quod :attribute necesse est ut inter :min et :max.',
        'file'    => 'Quod :attribute necesse est ut inter :min et :max kilobytes.',
        'string'  => 'Quod :attribute necesse est ut inter :min et :max ingenia.',
        'array'   => 'Quod :attribute necesse est ut inter :min et :max items.',
    ],
    'boolean'              => 'Quod :attribute ager autem est verum aut falsum.',
    'confirmed'            => 'Quod :attribute confirmatio non aequare.',
    'date'                 => 'Quod :attribute non valet diem.',
    'date_format'          => 'Quod :attribute nec forma congruit :format.',
    'different'            => 'Quod :attribute et :other oportet esse diversum.',
    'digits'               => 'Quod :attribute oportet :digits numeri.',
    'digits_between'       => 'Quod :attribute necesse est ut inter :min et :max numeri.',
    'dimensions'           => 'Quod :attribute invalidum est imago faciunt.',
    'distinct'             => 'Quod :attribute agri duplici exemplari habet valorem.',
    'email'                => 'Quod :attribute Oportet ratam electronica.',
    'exists'               => 'Quod lectus :attribute invalidum est.',
    'file'                 => 'Quod :attribute oportet esse lima.',
    'filled'               => 'Quod :attribute campum hoc requiritur.',
    'image'                => 'Quod :attribute oportet quod sit imago.',
    'in'                   => 'Quod lectus :attribute invalidum est.',
    'in_array'             => 'Quod :attribute non est in agro :other.',
    'integer'              => 'Quod :attribute oportet integrum.',
    'ip'                   => 'Quod :attribute IP oratio debet esse validum.',
    'json'                 => 'Quod :attribute JSON linea necesse est esse verum.',
    'max'                  => [
        'numeric' => 'Quod :attribute non potest esse major :max.',
        'file'    => 'Quod :attribute non potest esse major :max kilobytes.',
        'string'  => 'Quod :attribute non potest esse major :max ingenia.',
        'array'   => 'Quod :attribute non plus quam ut :max items.',
    ],
    'mimes'                => 'Quod :attribute debet esse in type lima: :values.',
    'mimetypes'            => 'Quod :attribute debet esse in type lima: :values.',
    'min'                  => [
        'numeric' => 'Quod :attribute ad minimum esse debere :min.',
        'file'    => 'Quod :attribute ad minimum esse debere :min kilobytes.',
        'string'  => 'Quod :attribute ad minimum esse debere :min ingenia.',
        'array'   => 'Quod :attribute necesse est ut saltem :min items.',
    ],
    'not_in'               => 'Quod lectus :attribute invalidum est.',
    'numeric'              => 'Quod :attribute sit numerus.',
    'present'              => 'Quod :attribute ager debet esse praesens.',
    'regex'                => 'Quod :attribute format est irritum.',
    'required'             => 'Quod :attribute campum hoc requiritur.',
    'required_if'          => 'Quod :attribute campum hoc requiritur quod :other quod :value.',
    'required_unless'      => 'Quod :attribute campum hoc requiritur nisi :other est in :values.',
    'required_with'        => 'Quod :attribute campum hoc requiritur quod :values quod present.',
    'required_with_all'    => 'Quod :attribute campum hoc requiritur quod :values quod present.',
    'required_without'     => 'Quod :attribute campum hoc requiritur quod :values quod nec munera.',
    'required_without_all' => 'Quod :attribute campum hoc requiritur quod nemo :values praesens est.',
    'same'                 => 'Quod :attribute et :other oportet inserere.',
    'size'                 => [
        'numeric' => 'Quod :attribute oportet :size.',
        'file'    => 'Quod :attribute oportet :size kilobytes.',
        'string'  => 'Quod :attribute oportet :size ingenia.',
        'array'   => 'Quod :attribute quae est :size items.',
    ],
    'string'               => 'Quod :attribute linea necesse est esse.',
    'timezone'             => 'Quod :attribute est zona valida.',
    'unique'               => 'Quod :attribute occupatis.',
    'uploaded'             => 'Quod :attribute ut upload defecit.',
    'url'                  => 'Quod :attribute format est irritum.',

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
