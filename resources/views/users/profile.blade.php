@component('layouts.app')

@slot('title') User Profile @endslot

<profile :user="{{ $user }}" :timezones="{{ json_encode($timezones) }}" :locales="{{ json_encode($locales) }}"></profile>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/users/profile.min.js') }}"></script>
@endslot

@endcomponent