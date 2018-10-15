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

    'accepted'             => 'Il Campo :attribute deve essere accettato.',
    'active_url'           => 'Il Campo :attribute non e\' un URL Valido.',
    'after'                => 'Il Campo :attribute deve essere una data successiva a :date.',
    'after_or_equal'       => 'Il Campo :attribute deve essere una data successiva o uguale a :date.',
    'alpha'                => 'Il Campo :attribute puo\' contenere soltanto lettere.',
    'alpha_dash'           => 'Il Campo :attribute puo\' contenere soltanto lettere, numeri, e linee.',
    'alpha_num'            => 'Il Campo :attribute puo\' contenere soltanto lettere e numeri.',
    'array'                => 'Il Campo :attribute deve essere un vettore .',
    'before'               => 'Il Campo :attribute deve essere una data precedente di :date.',
    'before_or_equal'      => 'Il Campo :attribute deve essere una data precedente o uguale a :date.',
    'between'              => [
        'numeric' => 'Il Campo :attribute deve essere tra :min e :max.',
        'file'    => 'Il Campo :attribute deve essere tra :min e :max kilobytes.',
        'string'  => 'Il Campo :attribute deve essere tra :min e :max characters.',
        'array'   => 'Il Campo :attribute deve avere tra :min and :max oggetti.',
    ],
    'boolean'              => 'Il Campo :attribute deve essere vero o falso.',
    'confirmed'            => 'Il Campo :attribute conferma non corrisponde.',
    'date'                 => 'Il Campo :attribute non è una data valida.',
    'date_format'          => 'Il Campo :attribute non corrisponde al formato :format.',
    'different'            => 'Il Campo :attribute e :other deve essere differente.',
    'digits'               => 'Il Campo :attribute deve essere :digits cifre.',
    'digits_between'       => 'Il Campo :attribute deve essere tra :min e :max cifre.',
    'dimensions'           => 'Il Campo :attribute ha una dimensione non valida nell\'immagine.',
    'distinct'             => 'Il Campo :attribute ha un valore duplicato.',
    'email'                => 'Il Campo :attribute deve essere un indirizzo email valido.',
    'exists'               => 'Il Campo selezionato :attribute non è valido.',
    'file'                 => 'Il Campo :attribute deve essere un file.',
    'filled'               => 'Il Campo :attribute è richiesto.',
    'image'                => 'Il Campo :attribute deve essere un immagine.',
    'in'                   => 'Il Campo selezionato :attribute non è valifo.',
    'in_array'             => 'Il Campo :attribute non esiste in :other.',
    'integer'              => 'Il Campo :attribute deve essere un intero.',
    'ip'                   => 'Il Campo :attribute deve essere un indirizzo IP valido.',
    'json'                 => 'Il Campo :attribute deve essere un JSON valido.',
    'max'                  => [
        'numeric' => 'Il Campo :attribute non deve essere piu\' grande di :max.',
        'file'    => 'Il Campo :attribute non deve essere piu\' grande di :max kilobytes.',
        'string'  => 'Il Campo :attribute non deve essere piu\' grande di :max characters.',
        'array'   => 'Il Campo :attribute non puo\' contenere piu\' di :max oggetti.',
    ],
    'mimes'                => 'Il Campo :attribute deve essere un file di tipo: :values.',
    'mimetypes'            => 'Il Campo :attribute deve essere un file di tipo: :values.',
    'min'                  => [
        'numeric' => 'Il Campo :attribute deve essere almeno :min.',
        'file'    => 'Il Campo :attribute deve essere almeno :min kilobytes.',
        'string'  => 'Il Campo :attribute deve essere almeno :min characters.',
        'array'   => 'Il Campo :attribute deve contenere almeno :min oggetti.',
    ],
    'not_in'               => 'Il Campo selezionato :attribute non e\' valido.',
    'numeric'              => 'Il Campo :attribute deve essere un numero.',
    'present'              => 'Il Campo :attribute deve essere presente.',
    'regex'                => 'Il Campo :attribute formato non e\' valido.',
    'required'             => 'Il Campo :attribute e\' richiesto.',
    'required_if'          => 'Il Campo :attribute e\' richiesto quando :other e\' :value.',
    'required_unless'      => 'Il Campo :attribute e\' richiesto a meno che :other non sia in :values.',
    'required_with'        => 'Il Campo :attribute e\' richiesto quando :values e\' presente.',
    'required_with_all'    => 'Il Campo :attribute e\' richiesto quando :values e\' presente.',
    'required_without'     => 'Il Campo :attribute e\' richiesto quando :values non e\' presente.',
    'required_without_all' => 'Il Campo :attribute e\' richiesto quando nessuno di :values e\' presente.',
    'same'                 => 'Il Campo :attribute e :other deve combaciare.',
    'size'                 => [
        'numeric' => 'Il Campo :attribute deve essere :size.',
        'file'    => 'Il Campo :attribute deve essere :size kilobytes.',
        'string'  => 'Il Campo :attribute deve essere :size characters.',
        'array'   => 'Il Campo :attribute deve contenere :size oggetti.',
    ],
    'string'               => 'Il Campo :attribute deve essere un testo.',
    'timezone'             => 'Il Campo :attribute deve essere una zona valida.',
    'unique'               => 'Il Campo :attribute e\' stato già preso.',
    'uploaded'             => 'Il Campo :attribute ha fallito il caricamento.',
    'url'                  => 'Il Campo :attribute formato non valido.',

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
