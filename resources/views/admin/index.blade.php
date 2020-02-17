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

@push('plugin-scripts')
    @foreach (glob(base_path() . '/resources/views/plugin-scripts/admin/*.blade.php') as $file)
        @include('plugin-scripts.admin.' . basename(str_replace('.blade.php', '', $file)))
    @endforeach
@endpush

@endcomponent
