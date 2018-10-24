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

    'accepted'             => 'ต้องยอมรับ :attribute',
    'active_url'           => ':attribute URL ไม่ถูกต้อง',
    'after'                => ':attribute ต้องเป็นวันที่หลัง :date',
    'after_or_equal'       => ':attribute ต้องเป็นวันที่หลังหรือเท่ากับ :date',
    'alpha'                => ':attribute ต้องมีเฉพาะตัวอักษรเท่านั้น',
    'alpha_dash'           => ':attribute ต้องมีเฉพาะตัวอักษร ตัวเลข หรือขีดเท่านั้น',
    'alpha_num'            => ':attribute ต้องมีเฉพาะตัวอักษรหรือตัวเลขเท่านั้น',
    'array'                => ':attribute ต้องเป็นอาเรย์',
    'before'               => ':attribute ต้องเป็นวันที่ก่อน :date',
    'before_or_equal'      => ':attribute ต้องเป็นวันที่ก่อนหรือเท่ากับ :date',
    'between'              => [
        'numeric' => ':attribute ต้องอยู่ระหว่าง :min และ :max.',
        'file'    => ':attribute ต้องอยู่ระหว่าง :min และ :max กิโลไบต์',
        'string'  => ':attribute ต้องอยู่ระหว่าง :min และ :max ตัวอักษร',
        'array'   => ':attribute ต้องอยู่ระหว่าง :min และ :max ไอเท็ม',
    ],
    'boolean'              => ':attribute ต้องเป็น true หรือ false',
    'confirmed'            => ':attribute ยืนยันไม่ตรงกัน',
    'date'                 => ':attribute วันที่ไม่ถูกต้อง',
    'date_format'          => ':attribute รูปแบบวันที่ไม่ตรงกับ :format',
    'different'            => ':attribute และ :other ต้องต่างกัน.',
    'digits'               => ':attribute ต้องมี :digits หลัก',
    'digits_between'       => ':attribute ต้องอยู่ระหว่าง :min และ :max หลัก',
    'dimensions'           => ':attribute ขนาดของรูปผิดพลาด',
    'distinct'             => ':attribute มีข้อมูลซ้ำ',
    'email'                => ':attribute ต้องเป็นอีเมล',
    'exists'               => ':attribute ที่เลือกไม่ถูกต้อง',
    'file'                 => ':attribute ต้องเป็นไฟล์',
    'filled'               => ':attribute ต้องไม่เป็นค่าว่าง',
    'image'                => ':attribute ต้องเป็นรูป',
    'in'                   => ':attribute ที่เลือกไม่ถูกต้อง',
    'in_array'             => ':attribute ไม่มีอยู่ใน :other',
    'integer'              => ':attribute ต้องเป็นตัวเลข',
    'ip'                   => ':attribute ต้องเป็นที่อยู่ IP',
    'json'                 => ':attribute ต้องเป็น JSON',
    'max'                  => [
        'numeric' => ':attribute ต้องไม่มากกว่า :max',
        'file'    => ':attribute ต้องไม่มากกว่า :max กิโลไบต์',
        'string'  => ':attribute ต้องไม่มากกว่า :max ตัวอักษร',
        'array'   => ':attribute ต้องไม่มากกว่า :max ไอเท็ม',
    ],
    'mimes'                => ':attribute ชนิดของไฟล์ต้องเป็น :values',
    'mimetypes'            => ':attribute ชนิดของไฟล์ต้องเป็น :values',
    'min'                  => [
        'numeric' => ':attribute ต้องมีอย่างน้อย :min.',
        'file'    => ':attribute ต้องมีอย่างน้อย :min กิโลไบต์',
        'string'  => ':attribute ต้องมีอย่างน้อย :min ตัวอักษร',
        'array'   => ':attribute ต้องมีอย่างน้อย :min ไอเท็ม',
    ],
    'not_in'               => ':attribute ที่เลือกไม่ถูกต้อง',
    'numeric'              => ':attribute ต้องเป็นตัวเลข',
    'present'              => 'ต้องมี :attribute',
    'regex'                => ':attribute รูปแบบไม่ถูกต้อง',
    'required'             => 'ต้องการ :attribute',
    'required_if'          => 'ต้องการ :attribute เมื่อ :other เป็น :value',
    'required_unless'      => 'ต้องการ :attribute ยกเว้นมี :other ใน :values',
    'required_with'        => 'ต้องการ :attribute เมื่อมี :values',
    'required_with_all'    => 'ต้องการ :attribute เมื่อมี :values',
    'required_without'     => 'ต้องการ :attribute เมื่อไม่มี :values',
    'required_without_all' => 'ต้องการ :attribute เมื่อไม่มีค่าใน :values',
    'same'                 => ':attribute และ :other ต้องตรงกัน',
    'size'                 => [
        'numeric' => ':attribute ต้องเป็น :size',
        'file'    => ':attribute ต้องเป็น :size กิโลไบต์',
        'string'  => ':attribute ต้องเป็น :size ตัวอักษร',
        'array'   => ':attribute ต้องมี :size ไอเท็ม',
    ],
    'string'               => ':attribute ต้องเป็น string',
    'timezone'             => ':attribute ต้องเป็นเขตเวลาที่ถูกต้อง',
    'unique'               => ':attribute ได้ถูกใช้ไปแล้ว',
    'uploaded'             => 'ไม่สามารถอัปโหลด :attribute',
    'url'                  => ':attribute รูปแบบไม่ถูกต้อง',

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
