@component('layouts.app')

@slot('title') Home Page @endslot

<home></home>

@slot('script')
<script>
    let currentWork = <?php echo json_encode($currentWork); ?>
</script>
<script>
    window.errors = <?php echo json_encode($errors->toArray()); ?>
</script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/home.min.js') }}"></script>
@endslot

@push('plugin-scripts')
    @foreach (glob(base_path() . '/resources/views/plugin-scripts/home/*.blade.php') as $file)
        @include('plugin-scripts.home.' . basename(str_replace('.blade.php', '', $file)))
    @endforeach
@endpush

@endcomponent
