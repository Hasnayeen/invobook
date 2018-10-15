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

    'accepted'             => 'L\'attribut :attribute doit être accepté.',
    'active_url'           => 'L\'attribut :attribute n\'est pas un URL valide.',
    'after'                => 'L\'attribut :attribute doit être une date postérieure à :date.',
    'after_or_equal'       => 'L\'attribut :attribute doit être une date postérieure ou égale à :date.',
    'alpha'                => 'L\'attribut :attribute ne peut contenir que des lettres.',
    'alpha_dash'           => 'L\'attribut :attribute ne peut contenir que des lettres, des chiffres et des tirets.',
    'alpha_num'            => 'L\'attribut :attribute ne peut contenir que des lettres et des chiffres.',
    'array'                => 'L\'attribut :attribute doit être un tableau.',
    'before'               => 'L\'attribut :attribute doit être une date antérieure à :date.',
    'before_or_equal'      => 'L\'attribut :attribute doit être une date antérieure ou égale à :date.',
    'between'              => [
        'numeric' => 'L\'attribut :attribute doit être entre :min et :max.',
        'file'    => 'L\'attribut :attribute doit avoir entre :min et :max kilooctets.',
        'string'  => 'L\'attribut :attribute doit avoir entre :min et :max caractères.',
        'array'   => 'L\'attribut :attribute doit avoir entre :min et :max éléments.',
    ],
    'boolean'              => 'L\'attribut :attribute doit être vrai ou faux.',
    'confirmed'            => 'La confirmation de l\'attribut :attribute ne correspond pas.',
    'date'                 => 'L\'attribut :attribute ne pas une date valide.',
    'date_format'          => 'L\'attribut :attribute ne correspond pas au format :format.',
    'different'            => 'Les attributs :attribute et :other doivent être différents.',
    'digits'               => 'L\'attribut :attribute doit avoir :digits chiffres.',
    'digits_between'       => 'L\'attribut :attribute doit avoir entre :min et :max chiffres.',
    'dimensions'           => 'L\'attribut :attribute a des dimensions d\'image non valides.',
    'distinct'             => 'L\'attribut :attribute a une valeur dupliquée.',
    'email'                => 'L\'attribut :attribute doit être une adresse courriel valide.',
    'exists'               => 'L\'attribut sélectionné pour :attribute n\'est pas valide.',
    'file'                 => 'L\'attribut :attribute doit être un fichier.',
    'filled'               => 'L\'attribut :attribute est requis.',
    'image'                => 'L\'attribut :attribute doit être une image.',
    'in'                   => 'L\'attribut sélectionné pour :attribute n\'est pas valide.',
    'in_array'             => 'L\'attribut :attribute n\'existe pas en :other.',
    'integer'              => 'L\'attribut :attribute doit être un nombre entier.',
    'ip'                   => 'L\'attribut :attribute doit être un adresse IP valide.',
    'json'                 => 'L\'attribut :attribute doit être une chaîne JSON valide.',
    'max'                  => [
        'numeric' => 'L\'attribut :attribute ne peut pas être supérieur à :max.',
        'file'    => 'L\'attribut :attribute ne peut pas être supérieur à :max kilooctets.',
        'string'  => 'L\'attribut :attribute ne peut pas être supérieur à :max caractères.',
        'array'   => 'L\'attribut :attribute ne peut pas avoir plus de :max éléments.',
    ],
    'mimes'                => 'L\'attribut :attribute doit être un fichier de type: :values.',
    'mimetypes'            => 'L\'attribut :attribute doit être un fichier de type: :values.',
    'min'                  => [
        'numeric' => 'L\'attribut :attribute doit être au moins :min.',
        'file'    => 'L\'attribut :attribute doit avoir au moins :min kilooctets.',
        'string'  => 'L\'attribut :attribute doit avoir au moins :min caractères.',
        'array'   => 'L\'attribut :attribute doit avoir au moins :min éléments.',
    ],
    'not_in'               => 'L\'attribut sélectionné pour :attribute n\'est pas valide.',
    'numeric'              => 'L\'attribut :attribute doit être un nombre.',
    'present'              => 'L\'attribut :attribute doit être présent.',
    'regex'                => 'L\'attribut :attribute format n\'est pas valide.',
    'required'             => 'L\'attribut :attribute est requis.',
    'required_if'          => 'L\'attribut :attribute est requis lorsque :other est :value.',
    'required_unless'      => 'L\'attribut :attribute est requis sauf si :other est dans :values.',
    'required_with'        => 'L\'attribut :attribute est requis lorsque :values est présent.',
    'required_with_all'    => 'L\'attribut :attribute est requis lorsque :values est présent.',
    'required_without'     => 'L\'attribut :attribute est requis lorsque :values n\'est pas présent.',
    'required_without_all' => 'L\'attribut :attribute est requis lorsque aucun des :values n\'est présent.',
    'same'                 => 'Les attributs :attribute et :other doivent correspondre.',
    'size'                 => [
        'numeric' => 'L\'attribut :attribute doit être :size.',
        'file'    => 'L\'attribut :attribute doit avoir :size kilooctets.',
        'string'  => 'L\'attribut :attribute doit avoir :size caractères.',
        'array'   => 'L\'attribut :attribute doit avoir :size éléments.',
    ],
    'string'               => 'L\'attribut :attribute doit être une chaîne.',
    'timezone'             => 'L\'attribut :attribute doit être un fuseau horaire valide.',
    'unique'               => 'L\'attribut :attribute a déjà été pris.',
    'uploaded'             => 'L\'attribut :attribute n\'a pas réussi à télécharger.',
    'url'                  => 'L\'attribut :attribute format n\'est pas valide.',

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
