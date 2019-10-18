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

    'accepted'             => 'Det :attribute skal accepteres.',
    'active_url'           => 'Det :attribute er ikke en gyldig webadresse.',
    'after'                => 'Det :attribute skal være en dato efter :date.',
    'after_or_equal'       => 'Det :attribute skal være en dato efter eller lig med :date.',
    'alpha'                => 'Det :attribute må kun indeholde bogstaver.',
    'alpha_dash'           => 'Det :attribute må kun indeholde bogstaver, tal og bindestreger.',
    'alpha_num'            => 'Det :attribute må kun indeholde bogstaver og tal.',
    'array'                => 'Det :attribute skal være en matrix.',
    'before'               => 'Det :attribute skal være en dato før :date.',
    'before_or_equal'      => 'Det :attribute skal være en dato før eller lig med :date.',
    'between'              => [
        'numeric' => 'Det :attribute skal være mellem :min og :max.',
        'file'    => 'Det :attribute skal være mellem :min og :max kilobyte.',
        'string'  => 'Det :attribute skal være mellem :min og :max tegn.',
        'array'   => 'Det :attribute skal have mellem :min og :max poster.',
    ],
    'boolean'              => 'Det :attribute feltet skal være sandt eller falsk.',
    'confirmed'            => 'Det :attribute bekræftelsen stemmer ikke overens.',
    'date'                 => 'Det :attribute er ikke en gyldig dato.',
    'date_format'          => 'Det :attribute stemmer ikke overens med formatet :format.',
    'different'            => 'Det :attribute og :other skal være anderledes.',
    'digits'               => 'Det :attribute må være :digits cifre.',
    'digits_between'       => 'Det :attribute skal være mellem :min og :max cifre.',
    'dimensions'           => 'Det :attribute har ugyldige billeddimensioner.',
    'distinct'             => 'Det :attribute feltet har en duplikatværdi.',
    'email'                => 'Det :attribute Skal være en gyldig e-mail-adresse.',
    'exists'               => 'Den valgte :attribute er ugyldig.',
    'file'                 => 'Det :attribute skal være en fil.',
    'filled'               => 'Det :attribute felt er påkrævet.',
    'image'                => 'Det :attribute skal være et billede.',
    'in'                   => 'Den valgte :attribute er ugyldig.',
    'in_array'             => 'Det :attribute feltet findes ikke i :other.',
    'integer'              => 'Det :attribute skal være et helt tal',
    'ip'                   => 'Det :attribute skal være en gyldig IP-adresse.',
    'json'                 => 'Det :attribute skal være en gyldig JSON-streng.',
    'max'                  => [
        'numeric' => 'Det :attribute Må ikke være større end :max.',
        'file'    => 'Det :attribute Må ikke være større end :max kilobyte.',
        'string'  => 'Det :attribute Må ikke være større end :max tegn.',
        'array'   => 'Det :attribute Må ikke have mere end :max poster.',
    ],
    'mimes'                => 'Det :attribute skal være en fil af typen: :values.',
    'mimetypes'            => 'Det :attribute skal være en fil af typen: :values.',
    'min'                  => [
        'numeric' => 'Det :attribute skal være mindst :min.',
        'file'    => 'Det :attribute skal være mindst :min kilobyte.',
        'string'  => 'Det :attribute skal være mindst :min tegn.',
        'array'   => 'Det :attribute skal mindst have :min poster.',
    ],
    'not_in'               => 'Den valgte :attribute er ugyldig.',
    'numeric'              => 'Det :attribute skal være et nummer.',
    'present'              => 'Det :attribute feltet skal være til stede.',
    'regex'                => 'Det :attribute formatet er ugyldigt.',
    'required'             => 'Det :attribute felt er påkrævet.',
    'required_if'          => 'Det :attribute felt er påkrævet, når :other er :value.',
    'required_unless'      => 'Det :attribute Felt er påkrævet, medmindre :other er i :values.',
    'required_with'        => 'Det :attribute felt er påkrævet, når :values er til stede.',
    'required_with_all'    => 'Det :attribute felt er påkrævet, når :values er til stede.',
    'required_without'     => 'Det :attribute felt er påkrævet, når :values er ikke til stede.',
    'required_without_all' => 'Det :attribute felt er påkrævet når ingen af :values er til stede.',
    'same'                 => 'Det :attribute og :other skal matche.',
    'size'                 => [
        'numeric' => 'Det :attribute må være :size.',
        'file'    => 'Det :attribute må være :size kilobyte.',
        'string'  => 'Det :attribute må være :size tegn.',
        'array'   => 'Det :attribute skal indeholde :size poster.',
    ],
    'string'               => 'Det :attribute skal være en streng.',
    'timezone'             => 'Det :attribute skal være en gyldig zone.',
    'unique'               => 'Det :attribute er allerede taget.',
    'uploaded'             => 'Det :attribute kunne ikke uploade.',
    'url'                  => 'Det :attribute formatet er ugyldigt.',

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
