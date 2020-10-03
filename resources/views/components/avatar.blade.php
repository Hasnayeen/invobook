@props([
    'class'   => 'w-8 h-8',
    'url'    => '/image/avatar.jpg',
])

<img src="{{ url($url) }}" alt="" class="{{ $class }} rounded-full">