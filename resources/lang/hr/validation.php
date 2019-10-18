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

    'accepted'             => ' :attribute mora biti prihvaćen.',
    'active_url'           => ' :attribute nije valjani link.',
    'after'                => ' :attribute mora biti datum nakon :date.',
    'after_or_equal'       => ' :attribute mora biti a datum nakon ili jednak :date.',
    'alpha'                => ' :attribute može sadržavati samo slova.',
    'alpha_dash'           => ' :attribute može sadržavati samo slova, brojeve i crtice.',
    'alpha_num'            => ' :attribute može sadržavati slova i brojeve.',
    'array'                => ' :attribute mora biti niz (array).',
    'before'               => ' :attribute mora biti datum prije :date.',
    'before_or_equal'      => ' :attribute mora biti datum prije ili jednak :date.',
    'between'              => [
        'numeric' => ' :attribute mora biti između :min i :max.',
        'file'    => ' :attribute mora biti između :min and :max kilobita.',
        'string'  => ' :attribute mora biti između :min and :max znakova.',
        'array'   => ' :attribute mora imati između :min and :max stavki.',
    ],
    'boolean'              => ' :attribute polje mora biti true ili false.',
    'confirmed'            => ' :attribute potvrda se ne slaže.',
    'date'                 => ' :attribute nije valjan datum.',
    'date_format'          => ' :attribute se ne slaže s formatom :format.',
    'different'            => ' :attribute i :other mora biti različit.',
    'digits'               => ' :attribute mora biti :digits znamenke.',
    'digits_between'       => ' :attribute mora biti između :min and :max znamenki.',
    'dimensions'           => ' :attribute ima nevaljane dimenzije slike.',
    'distinct'             => ' :attribute polje ima duplu vrijednost.',
    'email'                => ' :attribute mora biti valjana email adresa.',
    'exists'               => 'Odabrani :attribute nije valjan.',
    'file'                 => ' :attribute mora biti datoteka.',
    'filled'               => ' :attribute polje je traženo.',
    'image'                => ' :attribute mora biti slika.',
    'in'                   => 'Odabrani :attribute nije valjan',
    'in_array'             => ' :attribute polje ne postoji u :other.',
    'integer'              => '  :attribute mora biti integer (broj).',
    'ip'                   => ' :attribute mora biti a valjana IP adresa.',
    'json'                 => ' :attribute mora biti valjan JSON string.',
    'max'                  => [
        'numeric' => ' :attribute ne smije biti veći od :max.',
        'file'    => ' :attribute ne smije biti veći od :max kilobajta.',
        'string'  => ' :attribute ne smije biti veći od :max znakova.',
        'array'   => ' :attribute ne smije imati više od :max items.',
    ],
    'mimes'                => ' :attribute mora biti datoteka tipa: :values.',
    'mimetypes'            => ' :attribute mora biti datoteka tipa: :values.',
    'min'                  => [
        'numeric' => ' :attribute mora biti barem :min.',
        'file'    => ' :attribute mora biti barem :min kilobajta.',
        'string'  => ' :attribute mora biti barem :min znakova.',
        'array'   => ' :attribute mora imati barem :min items.',
    ],
    'not_in'               => 'Odabrani :attribute nije valjan.',
    'numeric'              => ' :attribute mora biti broj.',
    'present'              => ' :attribute polje mora biti prisutno.',
    'regex'                => ' :attribute format nije valjan.',
    'required'             => ' :attribute polje je traženo.',
    'required_if'          => ' :attribute polje je traženo kad :other je :value.',
    'required_unless'      => ' :attribute polje je traženo osim ako je  :other u :values.',
    'required_with'        => ' :attribute polje je traženo kad :values je prisutna.',
    'required_with_all'    => ' :attribute polje je traženo kad :values je prisutna.',
    'required_without'     => ' :attribute polje je traženo kad :values nije prisutna.',
    'required_without_all' => ' :attribute polje je traženo kad nijedna od :values nije prisutna.',
    'same'                 => ' :attribute i :other moraju se slagati.',
    'size'                 => [
        'numeric' => ' :attribute mora biti :size.',
        'file'    => ' :attribute mora biti :size kilobajta.',
        'string'  => ' :attribute mora biti :size znakova.',
        'array'   => ' :attribute mora sadržavati :size items.',
    ],
    'string'               => ' :attribute mora biti string.',
    'timezone'             => ' :attribute mora biti valjan zone.',
    'unique'               => ' :attribute je već zauzet.',
    'uploaded'             => ' :attribute se nije uspio uploadati.',
    'url'                  => ' :attribute format nije valjan.',

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
