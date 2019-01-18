@component('layouts.app')

@slot('title') Admin Panel @endslot
<h1 class="text-center">Notifications</h1>
<index :notifications="{{ $notifications }}"></index>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/admin/index.min.js') }}"></script>
@endslot

@endcomponent
