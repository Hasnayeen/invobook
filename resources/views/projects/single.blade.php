@component('layouts.app')

@slot('title') Single Resource View @endslot

<single :project="{{ $project }}"></single>

@slot('script')
<script src="/js/projects/single.js"></script>
@endslot

@endcomponent
