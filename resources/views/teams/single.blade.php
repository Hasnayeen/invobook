@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :team="{{ $team }}"></single>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/teams/single.min.js') }}"></script>
@endslot

@endcomponent
