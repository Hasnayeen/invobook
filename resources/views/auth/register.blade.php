@component('layouts.app')

@slot('title') Register @endslot

<register></register>

@slot('script')
<script type="text/javascript">
    window.url = "{{ url('/register') }}"
    window.errors = <?php echo json_encode($errors->toArray()); ?>
</script>
<script src="/js/auth/register.js"></script>
@endslot
@endcomponent
