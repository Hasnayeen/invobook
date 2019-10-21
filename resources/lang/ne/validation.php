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

    'accepted'             => ':attribute स्वीकार्नु पर्छ।',
    'active_url'           => ':attribute मान्य URL होईन।',
    'after'                => ':attribute पछाडि मिति हुनुपर्दछ :date।',
    'after_or_equal'       => ':attribute पछाडि वा बराबर मिति हुनुपर्दछ :date।',
    'alpha'                => ':attribute केवल अक्षरहरू समावेश हुन सक्छ।',
    'alpha_dash'           => ':attribute अक्षर, संख्या, र ड्यासहरू मात्र समावेश हुन सक्छ।',
    'alpha_num'            => ':attribute अक्षर र संख्याहरू मात्र समावेश हुन सक्छ।',
    'array'                => ':attribute एर्रे हुनुपर्दछ।',
    'before'               => ':attribute अघि मिति हुनुपर्दछ :date।',
    'before_or_equal'      => ':attribute अघिल्लो वा बराबर मिति हुनुपर्दछ :date।',
    'between'              => [
                                    'numeric' => ':attribute बीचमा हुनुपर्दछ :min र :max।',
                                    'file'    => ':attribute बीचमा हुनुपर्दछ :min र :max किलोबाइट्स।',
                                    'string'  => ':attribute बीचमा हुनुपर्दछ :min र :max पात्रहरू।',
                                    'array'   => ':attribute बीचमा हुनुपर्दछ :min र :max वस्तुहरू।',
                                ],
    'boolean'              => ':attribute क्षेत्र सहि वा गलत हुन पर्छ।',
    'confirmed'            => ':attribute पुष्टिकरण मेल खाँदैन।',
    'date'                 => ':attribute मान्य मिति होईन।',
    'date_format'          => ':attribute ढाँचासँग मेल खाँदैन :format।',
    'different'            => ':attribute र :other फरक हुनुपर्दछ।',
    'digits'               => ':attribute हुनै पर्छ :digits अंक।',
    'digits_between'       => ':attribute बीचमा हुनुपर्दछ :min र :max अंक।',
    'dimensions'           => ':attributeअवैध छवि आयाम छ।',
    'distinct'             => ':attribute क्षेत्रको एक नक्कल मान छ।',
    'email'                => ':attribute एक मान्य ईमेल ठेगाना हुनुपर्दछ।',
    'exists'               => 'चयनित :attribute अवैध छ।',
    'file'                 => ':attribute फाईल हुनुपर्दछ।',
    'filled'               => ':attribute क्षेत्र आवश्यक छ।',
    'image'                => ':attribute छवि हुनुपर्दछ।',
    'in'                   => 'चयनित :attribute अवैध छ।',
    'in_array'             => ':attribute क्षेत्र अवस्थित छैन :other।',
    'integer'              => ':attribute पूर्णांक हुनुपर्दछ।',
    'ip'                   => ':attribute एक मान्य आईपी ठेगाना हुनुपर्दछ।',
    'json'                 => ':attribute एक मान्य JSON स्ट्रि be हुनुपर्दछ।',
    'max'                  => [
                                    'numeric' => ':attribute भन्दा ठूलो नहुन सक्छ :max।',
                                    'file'    => ':attribute भन्दा ठूलो नहुन सक्छ :max किलोबाइट्स।',
                                    'string'  => ':attribute भन्दा ठूलो नहुन सक्छ :max पात्रहरू।',
                                    'array'   => ':attribute भन्दा ठूलो नहुन सक्छ :max वस्तुहरू।',
                                ],
    'mimes'                => ':attribute प्रकारको फाईल हुनुपर्दछ: :values।',
    'mimetypes'            => ':attribute प्रकारको फाईल हुनुपर्दछ: :values।',
    'min'                  => [
                                    'numeric' => ':attribute कम्तिमा हुनु पर्छ :min।',
                                    'file'    => ':attribute कम्तिमा हुनु पर्छ :min किलोबाइट्स।',
                                    'string'  => ':attribute कम्तिमा हुनु पर्छ :min पात्रहरू।',
                                    'array'   => ':attribute कम्तिमा हुनुपर्दछ :min वस्तुहरू।',
                                ],
    'not_in'               => 'चयनित :attribute अवैध छ।',
    'numeric'              => ':attribute संख्या हुनुपर्दछ',
    'present'              => ':attribute क्षेत्र उपस्थित हुनुपर्दछ।',
    'regex'                => ':attribute ढाँचा अवैध छ।',
    'required'             => ':attribute क्षेत्र आवश्यक छ।',
    'required_if'          => ':attribute क्षेत्र आवश्यक हुन्छ जब :other छ :value।',
    'required_unless'      => ':attribute क्षेत्र आवश्यक पर्दछ जबसम्म :other मा छ :values।',
    'required_with'        => ':attribute क्षेत्र आवश्यक हुन्छ जब :values उपस्थित छ।',
    'required_with_all'    => ':attribute क्षेत्र आवश्यक हुन्छ जब :values उपस्थित छ।',
    'required_without'     => ':attribute क्षेत्र आवश्यक हुन्छ जब :values उपस्थित छैन।',
    'required_without_all' => ':attribute फिल्ड आवश्यक छ जब कुनै पनि होइन :values उपस्थित छन्।',
    'same'                 => ':attribute र :other मिल्नै पर्छ।',
    'size'                 => [
                                    'numeric' => ':attribute हुनै पर्छ :size।',
                                    'file'    => ':attribute हुनै पर्छ :size किलोबाइट्स।',
                                    'string'  => ':attribute हुनै पर्छ :size पात्रहरू।',
                                    'array'   => ':attribute हुनु पर्छ :size वस्तुहरू।',
                                ],
    'string'               => ':attribute स्ट्रि be हुनै पर्दछ।',
    'timezone'             => ':attribute एक मान्य क्षेत्र हुनुपर्दछ।',
    'unique'               => ':attribute पहिले नै लिइएको छ।',
    'uploaded'             => ':attribute अपलोड गर्न असफल भयो।',
    'url'                  => ':attribute ढाँचा अवैध छ।',

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
