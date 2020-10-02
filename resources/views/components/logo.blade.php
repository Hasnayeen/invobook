@props([
    'color' => '#ffffff',
    'size'  => 'w-8 h-8'
])

<svg class="{{ $size }}" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" rx="120" fill="white"/>
    <rect x="50" y="50" width="500" height="500" rx="100" fill="black"/>
    <path class="fill-current text-green-400" d="M140 140H310C392.843 140 460 207.157 460 290V460H290C207.157 460 140 392.843 140 310V140Z" fill="#F6AD55"/>
</svg>
