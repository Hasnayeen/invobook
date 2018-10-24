<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | following language lines contain default error messages used by
    | validator class. Some of these rules have multiple versions such
    | as size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => ':attribute muss akzeptiert werden.',
    'active_url'           => ':attribute ist keine gültige URL.',
    'after'                => ':attribute muss ein Datum nach dem :date sein.',
    'after_or_equal'       => ':attribute muss ein Datum nach oder gleich dem :date sein.',
    'alpha'                => ':attribute darf ausschließlich Buchstaben enthalten.',
    'alpha_dash'           => ':attribute darf ausschließlich Buchstaben, Zahlen und Bindestriche enthalten.',
    'alpha_num'            => ':attribute darf ausschließlich Buchstaben und Zahlen enthalten.',
    'array'                => ':attribute muss ein Array sein.',
    'before'               => ':attribute muss ein Datum vor dem :date sein.',
    'before_or_equal'      => ':attribute muss ein Datum vor oder gleich dem :date sein.',
    'between'              => [
        'numeric' => ':attribute muss ein Wert zwischen :min und :max sein.',
        'file'    => ':attribute muss eine Dateigröße :min und :max Kilobytes haben.',
        'string'  => ':attribute muss eine Zeichenkette mit :min bis :max Buchstaben sein.',
        'array'   => ':attribute muss zwischen :min und :max Einträge enthalten.',
    ],
    'boolean'              => ':attribute muss dem Wert true oder false entsprechen.',
    'confirmed'            => ':attribute Bestätigung stimmt nicht überein.',
    'date'                 => ':attribute ist kein gültiges Datum.',
    'date_format'          => ':attribute entspricht nicht dem Format :format.',
    'different'            => ':attribute und :other müssen sich unterscheiden.',
    'digits'               => ':attribute muüssen :digits Zahlen sein.',
    'digits_between'       => ':attribute muss ein Zahlenwert zwischen :min und :max sein.',
    'dimensions'           => ':attribute hat eine ungültige Bildgröße.',
    'distinct'             => ':attribute enthält einen doppelten Wert.',
    'email'                => ':attribute muss eine valide E-Mail Adresse sein.',
    'exists'               => 'Auswahl :attribute ist ungültig.',
    'file'                 => ':attribute muss eine Datei sein.',
    'filled'               => ':attribute ist ein Pflichtfeld.',
    'image'                => ':attribute muss ein Bild sein.',
    'in'                   => 'Auswahl :attribute ist ungültig.',
    'in_array'             => ':attribute Feld existiert nicht in :other.',
    'integer'              => ':attribute muss eine Ganze Zahl sein.',
    'ip'                   => ':attribute muss eine valide IP-Adresse sein.',
    'json'                 => ':attribute muss ein valider JSON string sein.',
    'max'                  => [
        'numeric' => ':attribute darf nicht größer als :max sein.',
        'file'    => ':attribute darf nicht größer als :max Kilobytes sein.',
        'string'  => ':attribute darf nicht mehr :max Zeichen enthalten.',
        'array'   => ':attribute darf nicht mehr als :max Einträge enthalten.',
    ],
    'mimes'                => ':attribute muss eine Datei des folgenden Typs sein: :values.',
    'mimetypes'            => ':attribute muss eine Datei des folgenden Typs sein: :values.',
    'min'                  => [
        'numeric' => ':attribute muss mindestens :min entsprechen.',
        'file'    => ':attribute muss mindestens :min Kilobytes groß sein.',
        'string'  => ':attribute muss mindestens :min Zeichen enthalten.',
        'array'   => ':attribute muss mindestens :min Einträge enthalten.',
    ],
    'not_in'               => 'Auswahl :attribute ist ungültig.',
    'numeric'              => ':attribute muss eine Zahl sein.',
    'present'              => ':attribute muss vorhanden sein.',
    'regex'                => ':attribute hat ein ungültiges Format.',
    'required'             => ':attribute ist ein Pflichtfeld.',
    'required_if'          => ':attribute ist ein Pflichtfeld wenn :other dem Wert :value entspricht.',
    'required_unless'      => ':attribute ist ein Pflichtfeld bis :other in :values enthalten ist.',
    'required_with'        => ':attribute ist ein Pflichtfeld wenn :values vorhanden ist.',
    'required_with_all'    => ':attribute ist ein Pflichtfeld wenn :values vorhanden ist.',
    'required_without'     => ':attribute ist ein Pflichtfeld wenn :values nicht vorhanden ist.',
    'required_without_all' => ':attribute ist ein Pflichtfeld wenn keines von :values vorhanden ist.',
    'same'                 => ':attribute und :other müssen übereinstimmen.',
    'size'                 => [
        'numeric' => ':attribute muss :size entsprechen.',
        'file'    => ':attribute muss :size Kilobytes entsprechen.',
        'string'  => ':attribute muss :size Zeichen enthalten.',
        'array'   => ':attribute muss :size Einträge enthalten.',
    ],
    'string'               => ':attribute muss eine Zeichenkette sein.',
    'timezone'             => ':attribute muss eine gültige Zeitzone sein.',
    'unique'               => ':attribute ist bereits vergeben.',
    'uploaded'             => ':attribute konnte nicht hochgeladen werden.',
    'url'                  => ':attribute ist keine gültige URL.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name lines. This makes it quick to
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
    | following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],
];
