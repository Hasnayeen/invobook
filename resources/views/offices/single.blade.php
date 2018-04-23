@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :office="{{ $office }}"></single>

@slot('script')
<script src="/js/offices/single.js"></script>
@endslot

@endcomponent
