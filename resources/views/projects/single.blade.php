@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :project="{{ $project }}" :categories="{{ json_encode($categories) }}"></single>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/projects/single.js') }}"></script>
@endslot

@endcomponent
