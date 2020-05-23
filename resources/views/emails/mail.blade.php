@component('mail::message')
<strong>You Have Total {{ $numberOfMessage }} Unread Messages.</strong>


Thanks,<br>
{{ config('app.name') }}
@endcomponent