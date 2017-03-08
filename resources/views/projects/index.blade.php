@component('layouts.app')

@slot('title') All Projects @endslot

<list></list>

@slot('script')
<script type="text/javascript">
    window.data = <?php echo json_encode([
    'projects' => $projects,
]); ?>;
</script>
<script src="/js/projects/index.js"></script>
@endslot

@endcomponent
