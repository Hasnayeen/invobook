@component('layouts.app')

@slot('title') Home Page @endslot

<home :projects="projects" :teams="teams" :offices="offices"></home>

@slot('script')
<script>
    window.errors = @php echo json_encode($errors->toArray()); @endphp
</script>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script type="text/javascript">
    var projects = {!! $projects !!}
    var teams = {!! $teams !!}
    var offices = {!! $offices !!}
</script>
<script src="{{ mix('/js/home.min.js') }}"></script>

@endslot

@endcomponent
