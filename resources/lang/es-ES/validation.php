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

    'accepted'             => ':attribute debe ser aceptado.',
    'active_url'           => ':attribute no es una URL valida.',
    'after'                => ':attribute debe ser una fecha posterior a :date.',
    'after_or_equal'       => ':attribute debe ser una fecha posterior o igual a :date.',
    'alpha'                => ':attribute solo puede contener letras',
    'alpha_dash'           => ':attribute solo puede contener letras, numeros y guiones.',
    'alpha_num'            => ':attribute solo puede contener letras y numeros.',
    'array'                => ':attribute debe ser un array.',
    'before'               => ':attribute debe ser una fecha antes de :date.',
    'before_or_equal'      => ':attribute debe ser una fecha anterior o igual a :date.',
    'between'              => [
        'numeric' => 'El :attribute debe estar entre :min y :max.',
        'file'    => 'El :attribute debe ocupar entre :min y :max kilobytes.',
        'string'  => 'El :attribute debe ser entre :min y :max caracteres.',
        'array'   => 'El :attribute debe tener entre :min y :max valores.',
    ],
    'boolean'              => 'El :attribute debe ser verdadero o falso.',
    'confirmed'            => 'La validacon de :attribute no coincide.',
    'date'                 => ':attribute no es una fecha valida.',
    'date_format'          => ':attribute no cumple con el formato :format.',
    'different'            => ':attribute y :other deben ser diferentes.',
    'digits'               => ':attribute debe tener :digits digitos.',
    'digits_between'       => ':attribute debe estar entre :min y :max digitos.',
    'dimensions'           => ':attribute tiene unas dimensiones incorrectas.',
    'distinct'             => 'El campo :attribute tiene valores duplicados',
    'email'                => ':attribute debe ser una dirección de correo valida.',
    'exists'               => 'El :attribute seleccionado es invalido.',
    'file'                 => ':attribute debe ser un fichero.',
    'filled'               => 'El campo :attribute es obligatorio.',
    'image'                => ':attribute debe ser una imagen.',
    'in'                   => 'El :attribute seleccionado es invalido.',
    'in_array'             => 'El campo :attribute no existe en :other.',
    'integer'              => ':attribute debe ser un entero.',
    'ip'                   => ':attribute debe ser una dirección IP valida.',
    'json'                 => ':attribute debe ser una cadena JSON valida.',
    'max'                  => [
        'numeric' => ':attribute no debe ser mayor que :max.',
        'file'    => 'El :attribute no puede ocupar mas de :max kilobytes.',
        'string'  => ':attribute no puede tener mas de :max caracteres.',
        'array'   => ':attribute no puede contener mas de :max valores.',
    ],
    'mimes'                => ':attribute debe ser un archivo de tipo: :values.',
    'mimetypes'            => ':attribute debe ser un archivo de tipo: :values.',
    'min'                  => [
        'numeric' => ':attribute debe ser al menos :min.',
        'file'    => ':attribute debe ocupar al menos :min kilobytes.',
        'string'  => ':attribute debe tener al menos :min caracteresarac.',
        'array'   => ':attribute debe contener al menos :min valores.',
    ],
    'not_in'               => 'El valor seleccionado :attribute no es valido.',
    'numeric'              => ':attribute debe ser un numero.',
    'present'              => ':attribute debe ser rellenado.',
    'regex'                => ':attribute tiene un formato invalido.',
    'required'             => ':attribute es obligatorio.',
    'required_if'          => 'El campo :attribute es obligatorio cuando :other es :value.',
    'required_unless'      => 'El campo :attribute es obligatorio menos cuando :other está entre :values.',
    'required_with'        => 'El campo :attribute es obligatorio cuando :values está presente.',
    'required_with_all'    => 'El campo :attribute es obligatorio cuando :values están presentes.',
    'required_without'     => 'El campo :attribute es obligatorio cuando :values no están presentes.',
    'required_without_all' => 'El campo :attribute es obligatorio cuando :values no están presentes.',
    'same'                 => ':attribute y :other deben ser iguales.',
    'size'                 => [
        'numeric' => ':attribute debe ser :size.',
        'file'    => ':attribute debe ocupar :size kilobytes.',
        'string'  => ':attribute debe tener :size caracteres.',
        'array'   => ':attribute debe contener :size valores.',
    ],
    'string'               => ':attribute debe ser una cadena de texto.',
    'timezone'             => ':attribute debe ser una zona horaria valida.',
    'unique'               => ':attribute ya ha sido utilizado.',
    'uploaded'             => ':attribute falló en la subida.',
    'url'                  => 'El formato de :attribute es invalido.',

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
