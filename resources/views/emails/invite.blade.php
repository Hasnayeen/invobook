<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        @if ($company)
            <h2>{{ Auth::user()->name }} invited you to join Goodwork ({{ $company }})</h2>
        @else
            <h2>{{ Auth::user()->name }} invited you to join Goodwork</h2>
        @endif

        <div>
            Hi {{ $name }},
            <p><strong>Goodwork</strong> is a simple project management and collaboration tool to help everyone in {{ $company or 'a company'}} to stay organized and get work done.
            It's simple and easy! To join click the link below:
            <br/>
            <br/>
            {{ url('register/' . $token) }}
            </p>
        </div>

    </body>
</html>