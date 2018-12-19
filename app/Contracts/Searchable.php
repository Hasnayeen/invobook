<?php

namespace App\Contracts;

use App\Models\Search;

trait Searchable
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function huntable()
    {
        return $this->morphMany(Search::class, 'huntable');
    }

    public static function bootSearchable()
    {
        $fields = self::fields();

        static::created(function ($item) use ($fields) {
            $item->huntable()->create([
                'name'        => $item[$fields[0]],
                'description' => $item[$fields[1]],
            ]);
        });

        static::updated(function ($item) use ($fields) {
            $item->huntable()->update([
                'name'        => $item[$fields[0]],
                'description' => $item[$fields[1]],
            ]);
        });

        static::deleting(function ($item) use ($fields) {
            $item->huntable()->delete();
        });
    }

    /**
     * Get huntable fields.
     *
     * @return array
     */
    private static function fields()
    {
        $class = get_called_class();

        if (method_exists($class, 'huntableFields')) {
            return $class::huntableFields();
        }

        return ['name', 'description'];
    }
}
