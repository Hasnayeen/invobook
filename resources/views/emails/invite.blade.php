<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>{{ Auth::user()->name }} invited you to join Goodwork</h2>

        <div>
            Goodwork is a simple project management and collaboration tool to help everyone in a company to stay organized and getting work done.
            It's simple and easy! To join {{ $name }}, click the link below:
            <br/>
            <br/>
            {{ url('register/' . $token) }}
        </div>

    </body>
</html>