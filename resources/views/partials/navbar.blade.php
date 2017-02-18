<nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item is-base-darker" href="{{ url('/') }}">
      GOODWORK
      </a>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
        @if (!Auth::guest())
            <a class="nav-item is-tab" href="">{{ Auth::user()->username }}</a>
            <a class="nav-item is-tab" href="{{ url('/logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
            <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        @endif
    </div>
</nav>
