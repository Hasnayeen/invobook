@component('layouts.app')

@slot('title') Single Resource View @endslot

<single></single>

@slot('script')
<script>
    let team = {!! json_encode($team) !!}
    let current_cycle = {!! json_encode($team->current_cycle) !!}
</script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/teams/single.min.js') }}"></script>
@endslot

@endcomponent
