@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :office="{{ $office }}"></single>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ asset('/js/offices/single.js') }}"></script>
@endslot

@endcomponent
