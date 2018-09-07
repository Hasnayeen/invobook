@component('layouts.app')

@slot('title') Admin Panel @endslot

<index :users="{{ $users }}"></index>

@slot('script')
<script src="{{ asset('/js/admin/index.js') }}"></script>
@endslot

@endcomponent
