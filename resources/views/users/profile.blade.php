@component('layouts.app')

@slot('title') User Profile @endslot

<profile :user="{{ $user }}"></profile>

@slot('script')
<script src="{{ mix('/js/users/profile.js') }}"></script>
@endslot

@endcomponent