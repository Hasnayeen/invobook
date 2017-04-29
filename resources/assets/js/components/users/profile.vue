<template>
    <div class="user-profile">
        <div class="avatar-section">
            <div class="main-avatar">
                <img src="/image/avatar-profile.png" alt="Default avatar">
            </div>
            <div class="change-avatar">
                <input type="file" name="file" id="change-avatar-file" class="inputfile" />
                <label for="change-avatar-file">Change your avatar</label>
            </div>
        </div>
        <div class="inputs-section">

            <div class="field">
                <label class="label">Name <span class="required">required</span></label>
                <p class="control">
                    <input class="input" type="text" placeholder="">
                </p>
            </div>

            <div class="field">
                <label class="label">Title at Goodwork</label>
                <p class="control">
                    <input class="input" type="text" placeholder="">
                </p>
            </div>

            <div class="field">
                <label class="label">Short bio</label>
                <p class="control">
                    <input class="input" type="text" placeholder="">
                </p>
            </div>

            <div class="field">
                <label class="label">Email <span class="required">required</span></label>
                <p class="control">
                    <input class="input" type="email" placeholder="">
                </p>
            </div>

            <div class="field">
                <label class="label">Time zone</label>
                <p class="help">Goodwork uses your time zone setings for email notification, event reminders and your schedule.</p>
                <p class="control">
                    <span class="select is-fullwidth">
                        <select>
                            <option>Australia UTC +10:30</option>
                            <option>Australia UTC +9:30</option>
                            <option>South America UTC -5</option>
                            <option>Australia UTC +9:30 / +10:30</option>
                            <option>Australia UTC +8:45</option>
                            <option>Asia UTC +3</option>
                        </select>
                    </span>
                </p>
            </div>

            <div class="field">
                <label class="label">First day of the week</label>
                <p class="help">Goodwork uses this when presenting calendars.</p>
                <p class="control">
                    <span class="select is-fullwidth">
                        <select>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                    </span>
                </p>
            </div>

            <div class="field">
                <p class="control">
                    <button class="button is-primary">Save Changes</button>
                </p>
            </div>

            <div class="field user-remove-me">
                <label class="label">Want to leave?</label>
                <p class="control">
                    <a href="#">Remove me from this account.</a>
                </p>
            </div>

        </div>
    </div>
</template>