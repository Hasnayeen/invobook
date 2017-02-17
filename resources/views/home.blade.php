@component('layouts.app')

@slot('title') Home Page @endslot

<home></home>

@slot('script')
<script type="text/javascript">
    window.data = @php echo json_encode([
            'errors' => $errors,
            'guest' => !Auth::check()
        ]);
        @endphp;
</script>
<script src="/js/home.js"></script>
@endslot

@endcomponent
