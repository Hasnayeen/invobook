@component('layouts.app')

@slot('title') All task of this projects @endslot

<tasks></tasks>

@slot('script')
<script src="/js/projects/tasks.js"></script>
@endslot

@endcomponent
