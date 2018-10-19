@component('layouts.app')

@slot('title') Login @endslot

<login></login>

@slot('script')
<script type="text/javascript">
    window.url = "{{ url('/login') }}"
    window.errors = <?php echo json_encode($errors->toArray()); ?>
</script>
<script src="{{ mix('/js/auth/login.min.js') }}"></script>
@endslot
@endcomponent
