@component('layouts.app')

@slot('title') Messages @endslot

<messages></messages>

@slot('script')
<script src="/js/projects/messages.js"></script>
@endslot

@endcomponent
