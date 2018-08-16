@component('layouts.app')

@slot('title') Messages @endslot

<messages id="{{ $id }}" team="{{ $team }}"></messages>

@slot('script')
<script type="text/javascript">
    window.data = <?php echo json_encode([
    'messages' => $messages
]); ?>;
</script>
<script src="{{ asset(Request::getHost() . ':6001/socket.io/socket.io.js') }}"></script>
<script src="{{ asset('/js/teams/messages.js') }}"></script>
@endslot

@endcomponent
