@component('layouts.app')

@slot('title') Admin Panel @endslot

<index></index>

@slot('script')
<script>
    let users = <?php echo json_encode($users); ?>
</script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/admin/index.min.js') }}"></script>
@endslot

@endcomponent
