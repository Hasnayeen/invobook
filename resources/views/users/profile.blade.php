@component('layouts.app')

@slot('title') User Profile @endslot

<profile :user="{{ $user }}" :timezones="{{ json_encode($timezones) }}"></profile>

@slot('script')
<script src="{{ mix('/js/users/profile.min.js') }}"></script>
@endslot

@endcomponent