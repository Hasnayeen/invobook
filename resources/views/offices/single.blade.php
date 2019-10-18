@component('layouts.app')

@slot('title') Single Resource View @endslot

<single></single>

@slot('script')
<script>
    let office = {!! json_encode($office) !!}
    let current_cycle = {!! json_encode($office->current_cycle) !!}
</script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/offices/single.min.js') }}"></script>
@endslot

@endcomponent
