@component('layouts.app')

@slot('title') Messages @endslot

<messages id="{{ $id }}" office="{{ $office }}"></messages>

@slot('script')
<script type="text/javascript">
    window.data = <?php echo json_encode([
    'messages' => $messages
]); ?>;
</script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ asset('/js/offices/messages.js') }}"></script>
@endslot

@endcomponent
