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

    'accepted'             => 'ザ :attribute でなければなりません 受け入れられた.',
    'active_url'           => 'ザ :attribute 有効ではありません URL.',
    'after'                => 'ザ :attribute でなければなりません 後日 :date.',
    'after_or_equal'       => 'ザ :attribute 〜の後の日付 :date.',
    'alpha'                => 'ザ :attribute 文字のみを含むことができます.',
    'alpha_dash'           => 'ザ :attribute 文字、数字、およびダッシュだけを含むことができます.',
    'alpha_num'            => 'ザ :attribute 文字と数字のみを含むことができます.',
    'array'                => 'ザ :attribute でなければなりません 配列.',
    'before'               => 'ザ :attribute でなければなりません 前日 :date.',
    'before_or_equal'      => 'ザ :attribute 前後の日付 :date.',
    'between'              => [
        'numeric' => 'ザ :attribute 間になければならない :min そして :max.',
        'file'    => 'ザ :attribute 間になければならない :min そして :max kilobytes.',
        'string'  => 'ザ :attribute 間になければならない :min そして :max 文字.',
        'array'   => 'ザ :attribute 間になければならない :min そして :max items.',
    ],
    'boolean'              => 'ザ :attribute フィールドは真または偽でなければなりません.',
    'confirmed'            => 'ザ :attribute 確認が一致しません.',
    'date'                 => 'ザ :attribute 有効な日付ではありません.',
    'date_format'          => 'ザ :attribute フォーマットと一致しません :format.',
    'different'            => 'ザ :attribute そして :other でなければなりません 異なるようにします.',
    'digits'               => 'ザ :attribute でなければなりません :digits 数字.',
    'digits_between'       => 'ザ :attribute 間になければならない :min そして :max 数字.',
    'dimensions'           => 'ザ :attribute 無効な画像サイズがあります.',
    'distinct'             => 'ザ :attribute フィールドに重複値があります.',
    'email'                => 'ザ :attribute でなければなりません 有効な電子メールアドレスでなければなりません.',
    'exists'               => 'ザ 選択された :attribute 無効です.',
    'file'                 => 'ザ :attribute ファイルでなければならない.',
    'filled'               => 'ザ :attribute フィールドは必須項目です.',
    'image'                => 'ザ :attribute イメージでなければならない.',
    'in'                   => 'ザ 選択された :attribute 無効.',
    'in_array'             => 'ザ :attribute これは、フィールドではありません :other.',
    'integer'              => 'ザ :attribute でなければなりません 整数.',
    'ip'                   => 'ザ :attribute 有効なIPアドレスでなければなりません.',
    'json'                 => 'ザ :attribute 有効なJSON文字列でなければなりません.',
    'max'                  => [
        'numeric' => 'ザ :attribute より大きくすることはできません :max.',
        'file'    => 'ザ :attribute より大きくすることはできません :max kilobytes.',
        'string'  => 'ザ :attribute より大きくすることはできません :max 文字.',
        'array'   => 'ザ :attribute それは彼が必要があることをより多くのではありません :max items.',
    ],
    'mimes'                => 'ザ :attribute 型のファイルでなければならない: :values.',
    'mimetypes'            => 'ザ :attribute 型のファイルでなければならない: :values.',
    'min'                  => [
        'numeric' => 'ザ :attribute 最低でもあるはずです :min.',
        'file'    => 'ザ :attribute 最低でもあるはずです :min kilobytes.',
        'string'  => 'ザ :attribute 最低でもあるはずです :min 文字.',
        'array'   => 'ザ :attribute 少なくともでなければなりません :min items.',
    ],
    'not_in'               => 'ザ 選択された :attribute 無効.',
    'numeric'              => 'ザ :attribute 数は、.',
    'present'              => 'ザ :attribute フィールドが存在しなければならない.',
    'regex'                => 'ザ :attribute format est irritum.',
    'required'             => 'ザ :attribute 形式が無効です.',
    'required_if'          => 'ザ :attribute 形式が無効です ザ :other ザ :value.',
    'required_unless'      => 'ザ :attribute 形式が無効です しかし :other で :values.',
    'required_with'        => 'ザ :attribute 形式が無効です ザ :values ザ プレゼント.',
    'required_with_all'    => 'ザ :attribute 形式が無効です ザ :values ザ プレゼント.',
    'required_without'     => 'ザ :attribute 形式が無効です ザ :values ザ 現在ではない.',
    'required_without_all' => 'ザ :attribute 形式が無効です ザ ネモ :values 存在しています.',
    'same'                 => 'ザ :attribute そして :other 一致している必要があります.',
    'size'                 => [
        'numeric' => 'ザ :attribute でなければなりません :size.',
        'file'    => 'ザ :attribute でなければなりません :size kilobytes.',
        'string'  => 'ザ :attribute でなければなりません :size 文字.',
        'array'   => 'ザ :attribute 含まれている必要があります :size items.',
    ],
    'string'               => 'ザ :attribute 文字列でなければならない.',
    'timezone'             => 'ザ :attribute 有効なゾーンでなければならない.',
    'unique'               => 'ザ :attribute すでに使用されている.',
    'uploaded'             => 'ザ :attribute アップロードに失敗しました.',
    'url'                  => 'ザ :attribute フォーマットが無効です.',

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
    | with somそしてhing more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],
];
