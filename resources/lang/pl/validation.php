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

    'accepted'             => ':attribute musi być zaakceptowany.',
    'active_url'           => ':attribute nie jest poprawnym URL-em.',
    'after'                => ':attribute musi być datą za :date.',
    'after_or_equal'       => ':attribute musi być datą za lub równą :date.',
    'alpha'                => ':attribute może zawierać tylo litery.',
    'alpha_dash'           => ':attribute może zawierać tylo litery, liczby, i myślniki.',
    'alpha_num'            => ':attribute może zawierać tylo litery i liczby.',
    'array'                => ':attribute musi być tablicą.',
    'before'               => ':attribute musi być datą przed :date.',
    'before_or_equal'      => ':attribute musi być datą przed lub równą :date.',
    'between'              => [
        'numeric' => ':attribute musi być pomiędzy :min a :max.',
        'file'    => ':attribute musi mieć pomiędzy :min a :max kilobajtów.',
        'string'  => ':attribute musi mieć pomiędzy :min a :max znaków.',
        'array'   => ':attribute must zawierać pomiędzy :min a :max pozycji.',
    ],
    'boolean'              => ':attribute musi zawierać prawdę lub fałsz.',
    'confirmed'            => ':attribute nie pasuje do potwierdzenia.',
    'date'                 => ':attribute nie jest prawidłową datą.',
    'date_format'          => ':attribute nie jest zgodne z formatem :format.',
    'different'            => ':attribute i :other muszą być różne.',
    'digits'               => ':attribute musi mieć :digits cyfr.',
    'digits_between'       => ':attribute musi mieć pomiędzy :min a :max cyfr.',
    'dimensions'           => ':attribute ma niewłaściwe wymiary obrazu.',
    'distinct'             => ':attribute ma zduplikowaną wartość.',
    'email'                => ':attribute musi być poprawnym adresem email.',
    'exists'               => 'Wybrany :attribute jest niepoprawny.',
    'file'                 => ':attribute musi być plikiem.',
    'filled'               => ':attribute jest wymagany.',
    'image'                => ':attribute musi być zdjęciem.',
    'in'                   => 'Wybrany :attribute jest niepoprawny.',
    'in_array'             => ':attribute nie występuje w :other.',
    'integer'              => ':attribute musi być liczbą całkowitą.',
    'ip'                   => ':attribute musi być poprawnym adresem IP.',
    'json'                 => ':attribute musi być poprawnym łańcuchem JSON.',
    'max'                  => [
        'numeric' => ':attribute nie może być większy niż :max.',
        'file'    => ':attribute nie może być większy niż :max kilobajtów.',
        'string'  => ':attribute nie może być większy niż :max znaków.',
        'array'   => ':attribute nie może zawierać więcej niż :max pozycji.',
    ],
    'mimes'                => ':attribute musi być plikiem o typie: :values.',
    'mimetypes'            => ':attribute musi być plikiem o typie: :values.',
    'min'                  => [
        'numeric' => ':attribute musi być przynajmniej :min.',
        'file'    => ':attribute musi mieć przynajmniej :min kilobajtów.',
        'string'  => ':attribute musi mieć przynajmniej :min znaków.',
        'array'   => ':attribute musi zawierać przynajmniej :min pozycji.',
    ],
    'not_in'               => 'Zaznaczony :attribute jest niepoprawny.',
    'numeric'              => ':attribute musi być liczbą.',
    'present'              => ':attribute pole jest wymagane.',
    'regex'                => ':attribute format jest niepoprawny.',
    'required'             => ':attribute pole jest wymagane.',
    'required_if'          => ':attribute pole jest wymagane jeśli :other ma :value.',
    'required_unless'      => ':attribute pole jest wymagane, chyba  że :other jest w :values.',
    'required_with'        => ':attribute pole jest wymagane kiedy :values jest obecne.',
    'required_with_all'    => ':attribute pole jest wymagane kiedy :values jest obecne.',
    'required_without'     => ':attribute pole jest wymagane kiedy :values nie występuje.',
    'required_without_all' => ':attribute field is required when none of :values are present.',
    'same'                 => ':attribute i :other muszą być takie same.',
    'size'                 => [
        'numeric' => ':attribute musi mieć :size.',
        'file'    => ':attribute musi mieć :size kilobajtów.',
        'string'  => ':attribute musi mieć :size znaków.',
        'array'   => ':attribute musi zawierać :size pozycji.',
    ],
    'string'               => ':attribute musi być łańcuchem znaków.',
    'timezone'             => ':attribute musi być poprawną strefą czasową.',
    'unique'               => ':attribute jest już zajęty.',
    'uploaded'             => ':attribute - nie udało się przesłać.',
    'url'                  => ':attribute ma nieprawidłowy format.',

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
