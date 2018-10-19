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

    'accepted'             => ':attribute måste vara bekräftad.',
    'active_url'           => ':attribute är inte en giltig URL.',
    'after'                => ':attribute måste vara ett datum efter :date.',
    'after_or_equal'       => ':attribute måste vara ett datum efter eller på :date.',
    'alpha'                => ':attribute kan bara innehålla bokstäver',
    'alpha_dash'           => ':attribute kan bara innehålla bokstäver, siffror eller streck.',
    'alpha_num'            => ':attribute kan bara innehålla bokstäver och siffror.',
    'array'                => ':attribute måste vara en array.',
    'before'               => ':attribute måste vara ett datum före :date.',
    'before_or_equal'      => ':attribute måste vara ett datum före eller på :date.',
    'between'              => [
        'numeric' => 'Angivna :attribute måste vara mellan :min och :max.',
        'file'    => 'Angivna :attribute måste vara mellan :min och :max kilobytes.',
        'string'  => 'Angivna :attribute måste vara mellan :min och :max bokstäver.',
        'array'   => 'Angivna :attribute måste ha mellan :min och :max enheter.',
    ],
    'boolean'              => 'Angivna :attribute fältet måste vara antingen sant eller falskt.',
    'confirmed'            => 'Angivna :attribute bekräftelsen stämmer inte.',
    'date'                 => ':attribute är inte ett giltigt datum.',
    'date_format'          => ':attribute verkar inte stämma med formatet :format.',
    'different'            => ':attribute och :other måste vara olika.',
    'digits'               => ':attribute måste vara :digits siffror.',
    'digits_between'       => ':attribute måste vara mellan :min och :max siffror.',
    'dimensions'           => ':attribute har ogiltig storlek för bilden.',
    'distinct'             => 'Angivna :attribute har värden som är dubbla',
    'email'                => ':attribute måste vara en giltig e-post adress.',
    'exists'               => 'Valda :attribute är ogiltig.',
    'file'                 => ':attribute måste vara en fil.',
    'filled'               => 'Angivna :attribute är obligatorisk.',
    'image'                => ':attribute måste vara en bild.',
    'in'                   => 'Valda :attribute är ogiltig.',
    'in_array'             => 'Angivna :attribute existerar inte i :other.',
    'integer'              => ':attribute måste vara ett heltal.',
    'ip'                   => ':attribute måste vara en giltig IP adress.',
    'json'                 => ':attribute måste vara giltig JSON sträng.',
    'max'                  => [
        'numeric' => ':attribute kan inte vara större än :max.',
        'file'    => 'Angivna :attribute kan inte vara större än :max kilobytes.',
        'string'  => ':attribute kan inte vara fler än :max bokstäver.',
        'array'   => ':attribute kan inte ha fler än :max enheter.',
    ],
    'mimes'                => ':attribute måste vara en fil av typen: :values.',
    'mimetypes'            => ':attribute måste vara en fil av typen: :values.',
    'min'                  => [
        'numeric' => ':attribute måste ha minst :min.',
        'file'    => ':attribute måste ha minst :min kilobytes.',
        'string'  => ':attribute måste ha minst :min bokstäver.',
        'array'   => ':attribute måste ha minst :min enheter.',
    ],
    'not_in'               => 'Den valda :attribute är ej giltig.',
    'numeric'              => ':attribute måste vara en siffra.',
    'present'              => ':attribute måste vara existerande.',
    'regex'                => ':attribute formatet är ogiltigt.',
    'required'             => ':attribute är obligatoriskt.',
    'required_if'          => 'Angivna :attribute är obligatoriskt när :other är :value.',
    'required_unless'      => 'Angivna :attribute är obligatoriskt när :other är i :values.',
    'required_with'        => 'Angivna :attribute är obligatoriskt när :values är existerande.',
    'required_with_all'    => 'Angivna :attribute är obligatoriskt när :values är existerande.',
    'required_without'     => 'Angivna :attribute är obligatoriskt när :values inte är existerande.',
    'required_without_all' => 'Angivna :attribute är obligatoriskt när :values inte är existerande.',
    'same'                 => ':attribute och :other måste stämma överrens.',
    'size'                 => [
        'numeric' => ':attribute måste vara :size.',
        'file'    => ':attribute måste vara :size kilobytes.',
        'string'  => ':attribute måste vara :size bokstäver.',
        'array'   => ':attribute måste innehålla :size enheter.',
    ],
    'string'               => ':attribute måste vara en sträng.',
    'timezone'             => ':attribute måste vara en giltig tidszon.',
    'unique'               => ':attribute har redan blivit tagen.',
    'uploaded'             => ':attribute misslyckades att ladda upp.',
    'url'                  => 'Formatet för :attribute är ogiltigt.',

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
