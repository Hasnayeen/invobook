@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :office="{{ $office }}"></single>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/offices/single.min.js') }}"></script>
@endslot

@endcomponent
