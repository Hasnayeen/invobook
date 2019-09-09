@component('layouts.app')

@slot('title') Register @endslot

@section('style')
<style type="text/css">
    html, body {
        height: 100%;
    }
    body {
        background-color: #08b7ce;
    }
</style>
@endsection

<register></register>

@slot('script')
<script type="text/javascript">
    window.url = "{{ $token }}"
    window.errors = <?php echo json_encode($errors->toArray()); ?>
</script>
<script src="{{ mix('/js/auth/register.min.js') }}"></script>
@endslot
@endcomponent
