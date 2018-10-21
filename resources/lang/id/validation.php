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

    'accepted'             => ':attribute harus dipilih.',
    'active_url'           => ':attribute bukan berupa URL yang valid.',
    'after'                => ':attribute harus berupa tanggal setelah :date.',
    'after_or_equal'       => ':attribute harus berupa tanggal setelah atau sama dengan :date.',
    'alpha'                => ':attribute hanya boleh berisi huruf.',
    'alpha_dash'           => ':attribute hanya boleh berisi huruf, angka, dan tanda hubung.',
    'alpha_num'            => ':attribute hanya boleh berisi huruf dan angka.',
    'array'                => ':attribute harus berupa array.',
    'before'               => ':attribute harus berupa tanggal sebelum :date.',
    'before_or_equal'      => ':attribute harus berupa tanggal sebelum atau sama dengan :date.',
    'between'              => [
        'numeric' => ':attribute harus berjumlah :min s/d :max.',
        'file'    => ':attribute harus berukuran :min s/d :max kB.',
        'string'  => ':attribute harus berupa :min s/d :max karakter.',
        'array'   => ':attribute harus berjumlah :min s/d :max item.',
    ],
    'boolean'              => ':attribute harus berisi benar (true) atau salah (false).',
    'confirmed'            => 'Konfirmasi :attribute tidak sesuai.',
    'date'                 => ':attribute bukan berupa tanggal yang valid.',
    'date_format'          => ':attribute tidak sesuai dengan :format.',
    'different'            => ':attribute dan :other harus berbeda.',
    'digits'               => ':attribute harus berupa :digits digit.',
    'digits_between'       => ':attribute harus berupa :min s/d :max digit.',
    'dimensions'           => ':attribute tidak memiliki dimensi gambar yang sesuai.',
    'distinct'             => ':attribute memiliki beberapa item yang bernilai sama.',
    'email'                => ':attribute harus berupa alamat email yang valid.',
    'exists'               => ':attribute yang dipilih tidak sesuai.',
    'file'                 => ':attribute harus berupa berkas.',
    'filled'               => ':attribute harus diisi.',
    'image'                => ':attribute harus berupa berkas gambar.',
    'in'                   => ':attribute yang dipilih tidak sesuai.',
    'in_array'             => 'Isi kolom :attribute tidak ada dalam :other.',
    'integer'              => ':attribute harus berupa bilangan bulat.',
    'ip'                   => ':attribute harus berupa alamat IP yang valid.',
    'json'                 => ':attribute harus berupa teks JSON yang valid.',
    'max'                  => [
        'numeric' => ':attribute tidak boleh lebih dari :max.',
        'file'    => ':attribute tidak boleh lebih dari :max kB.',
        'string'  => ':attribute tidak boleh lebih dari :max karakter.',
        'array'   => ':attribute tidah boleh lebih dari :max item.',
    ],
    'mimes'                => ':attribute harus berupa tipe berkas: :values.',
    'mimetypes'            => ':attribute harus berupa tipe berkas: :values.',
    'min'                  => [
        'numeric' => ':attribute harus lebih besar dari :min.',
        'file'    => ':attribute harus lebih besar dari :min kB.',
        'string'  => ':attribute harus lebih dari :min karakter.',
        'array'   => ':attribute harus lebih :min item.',
    ],
    'not_in'               => ':attribute yang dipilih tidak sesuai.',
    'numeric'              => ':attribute harus berupa angka.',
    'present'              => ':attribute harus ada.',
    'regex'                => 'Format dari :attribute tidak sesuai.',
    'required'             => 'Kolom :attribute harus diisi.',
    'required_if'          => 'Kolom :attribute harus diisi ketika :other berupa :value.',
    'required_unless'      => 'Kolom :attribute harus diisi kecuali :other berupa :values.',
    'required_with'        => 'Kolom :attribute harus diisi ketika :values diisi.',
    'required_with_all'    => 'Kolom :attribute harus diisi ketika :values diisi.',
    'required_without'     => 'Kolom :attribute harus diisi ketika :values tidak tersedia.',
    'required_without_all' => 'Kolom :attribute harus diisi ketika :values tidak tersedia.',
    'same'                 => ':attribute dan :other harus sama.',
    'size'                 => [
        'numeric' => ':attribute harus sebesar :size.',
        'file'    => ':attribute harus sebesar :size kB.',
        'string'  => ':attribute harus sejumlah :size karakter.',
        'array'   => ':attribute harus berupa :size item.',
    ],
    'string'               => ':attribute harus berupa teks.',
    'timezone'             => ':attribute harus berupa zona waktu yang valid.',
    'unique'               => ':attribute sudah diambil.',
    'uploaded'             => ':attribute gagal diunggah.',
    'url'                  => 'Format :attribute tidak sesuai.',

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
