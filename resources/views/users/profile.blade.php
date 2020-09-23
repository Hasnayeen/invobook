@component('layouts.app')

@slot('title') User Profile @endslot

<profile :user="{{ $user }}" :timezones="{{ json_encode($timezones) }}" :locales="{{ json_encode($locales) }}"></profile>

@slot('script')
<script src="{{ mix('/js/users/profile.min.js') }}"></script>
@endslot

@push('plugin-scripts')
    @foreach (glob(base_path() . '/resources/views/plugin-scripts/users/profile/*.blade.php') as $file)
        @include('plugin-scripts.users.profile.' . basename(str_replace('.blade.php', '', $file)))
    @endforeach
@endpush

@endcomponent