@component('layouts.app')

@slot('title') Messages @endslot

<messages></messages>

@slot('script')
<script src="/js/teams/messages.js"></script>
@endslot

@endcomponent
