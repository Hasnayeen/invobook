@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :project="{{ $project }}"></single>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ asset('/js/projects/single.js') }}"></script>
@endslot

@endcomponent
