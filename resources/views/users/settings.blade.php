@component('layouts.app')

@slot('title') User Settings @endslot

<settings></settings>

@slot('script')
<script src="{{ mix('/js/users/settings.min.js') }}"></script>
@endslot

@endcomponent
