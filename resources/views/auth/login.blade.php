@component('layouts.app')

@slot('title') Login @endslot

<login></login>

@slot('script')
<script type="text/javascript">
    window.url = "{{ url('/login') }}"
    window.errors = {!! json_encode($errors->toArray()) !!}
    window.oldEmail = {!! json_encode(session()->getOldInput('email')) !!}
</script>
<script src="{{ mix('/js/auth/login.min.js') }}"></script>
@endslot
@endcomponent
