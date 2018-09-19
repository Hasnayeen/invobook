@component('mail::message')
# Welcome Aboard

Hi {{ $user->name }},

You've joined the goodwork software for {{ config('app.name') }} organization. Here are your account details

@component('mail::panel')
Username: {{ $user->username }}

URL: {{ config('app.url') }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
