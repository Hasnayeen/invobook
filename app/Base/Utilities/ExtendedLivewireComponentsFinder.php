<?php

namespace App\Base\Utilities;

use ReflectionClass;
use Livewire\Component;
use Illuminate\Support\Str;
use Illuminate\Filesystem\Filesystem;
use Livewire\LivewireComponentsFinder;
use Symfony\Component\Finder\SplFileInfo;

class ExtendedLivewireComponentsFinder extends LivewireComponentsFinder
{
    protected $path;
    protected $files;
    protected $manifest;
    protected $manifestPath;

    public function __construct(Filesystem $files, $manifestPath, $path)
    {
        $this->files = $files;
        $this->path = $path;
        $this->manifestPath = $manifestPath;
    }

    public function build()
    {
        $this->manifest = $this->getClassNames()
            ->mapWithKeys(function ($class) {
                return [$this->getName($class) => $class];
            })->toArray();

        $this->write($this->manifest);

        return $this;
    }

    protected function getName($class)
    {
        $classNamespace = collect(config('livewire.class_namespaces'))->filter(fn ($x) => strpos($class, $x) !== false)->first();
        $namespace = collect(explode('.', str_replace(['/', '\\'], '.', $classNamespace)))
            ->map([Str::class, 'kebab'])
            ->implode('.');

        $fullName = collect(explode('.', str_replace(['/', '\\'], '.', $class)))
            ->map([Str::class, 'kebab'])
            ->implode('.');

        if (Str::startsWith($fullName, $namespace)) {
            return Str::substr($fullName, strlen($namespace) + 1);
        }

        return $fullName;
    }

    public function getClassNames()
    {
        return $this->path
            ->map(function ($item) {
                return $this->files->allFiles($item);
            })
            ->flatten()
            ->map(function (SplFileInfo $file) {
                return app()->getNamespace().str_replace(
                    ['/', '.php'],
                    ['\\', ''],
                    Str::after($file->getPathname(), app_path().'/')
                );
            })
            ->filter(function (string $class) {
                return is_subclass_of($class, Component::class) &&
                    ! (new ReflectionClass($class))->isAbstract();
            });
    }
}
