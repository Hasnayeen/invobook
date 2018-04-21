@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :team="{{ $team }}"></single>

@slot('script')
<script src="/js/teams/single.js"></script>
@endslot

@endcomponent
