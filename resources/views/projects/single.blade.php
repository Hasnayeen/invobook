@component('layouts.app')

@slot('title') Single Resource View @endslot

<single></single>

@slot('script')
<script>
    let project = <?php echo json_encode($project); ?>
</script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/projects/single.min.js') }}"></script>
@endslot

@endcomponent
