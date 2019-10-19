<?php

namespace App\Base\Http\Controllers;

use Carbon\Carbon;
use App\Base\Models\User;
use App\Base\Models\Invite;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class InvitationController extends Controller
{
    public function store(Request $request)
    {
        $this->authorize('invite', User::class);
        $validatedData = $request->validate([
            'role_id'      => 'required|integer|exists:roles,id',
            'expiry_date'  => 'nullable|date',
        ]);
        $link = url('register/invite-link/' . Str::random(32));
        $inviteLink = Invite::where('role_id', $validatedData['role_id'])->first();
        if (! $inviteLink) {
            $inviteLink = new Invite();
            $inviteLink->role_id = $validatedData['role_id'];
        }
        $inviteLink->link = $link;
        $inviteLink->expiry_date = $validatedData['expiry_date'] ?? null;
        $inviteLink->save();

        return response()->json([
            'status' => 'success',
            'link'   => $inviteLink->link,
        ]);
    }

    public function show()
    {
        $invite = Invite::where('role_id', request('role_id'))->first();

        return response()->json([
            'status' => 'success',
            'link'   => $invite->link ?? null,
        ]);
    }

    public function showRegistrationForm($token)
    {
        $today = Carbon::now();
        $invite = Invite::where('link', url('register/invite-link/' . $token))->first();
        $notExpired = $invite && $invite->expiry_date ? $today->lessThanOrEqualTo($invite->expiry_date) : true;
        if ($invite && $notExpired) {
            return view('auth.register', ['token' => $invite->link]);
        }

        abort(403);
    }
}
