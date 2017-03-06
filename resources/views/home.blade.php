@component('layouts.app')

@slot('title') Home Page @endslot

<home></home>

@slot('script')
<script type="text/javascript">
    window.data = <?php echo json_encode([
    'projects' => $projects,
    'teams'    => $teams,
    'offices'  => $offices,
]); ?>;
    window.errors = <?php echo json_encode($errors->toArray()); ?>
</script>
<script src="/js/home.js"></script>
@endslot

@endcomponent
