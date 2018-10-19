@component('layouts.app')

@slot('title') Admin Panel @endslot

<index :users="{{ $users }}"></index>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/admin/index.min.js') }}"></script>
@endslot

@endcomponent
