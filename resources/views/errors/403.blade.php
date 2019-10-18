@component('layouts.app')

@slot('title') 403 - Unauthorized access @endslot

<div class="text-4xl text-grey-700 container mx-auto mt-16 text-center font-bold">
    <div class="text-teal-500" style="font-size: 16rem">
        403
    </div>
    <div class="mb-8 text-gray-700">WHOOPS! Access Denied</div>
    <a href="{{ url('/') }}" class="text-teal-500 no-underline text-2xl">← Go To Home</a>
</div>

@slot('script')
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/errors/404.min.js') }}"></script>
@endslot

@endcomponent
