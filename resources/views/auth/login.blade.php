@component('layouts.app')

@slot('title') Login @endslot

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

<login></login>

@slot('script')
<script type="text/javascript">
    window.url = "{{ url('/login') }}"
    window.errors = <?php echo json_encode($errors->toArray()); ?>
</script>
<script src="/js/auth/login.js"></script>
@endslot
@endcomponent
