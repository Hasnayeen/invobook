# Release Notes

## v0.10 (Yet to release)

### Added

- TaskManager, Project module added and all related code moved there
- Tag can be created from group page and add/remove them to the group
- Added oauth2 authentication (laravel passport) for mobile app
- Roadmap tool can be enabled/disabled
- Group can be made publicly viewable (without account)
- Database backup & restore option via dropbox
- Delete direct message
- Endpoint to delete file
- Timer functionality
- Added Vietnamese translation
- Added Bosnian translation
- Added Bengali translation
- Added Nepali translation
- Added possibility to edit messages on the messageboard

### Changed

- `App\Core` namespace is now `App\Base`

### Removed

- Removed `confirm_password` from registration

## v0.9 (2019-06-30)

### Added

- New Authorization module
- New permission system
- File upload option in file section
- Direct messaging to user functionality
- Mentioning user functionality in comment & message
- New cycle (release based) functionality
- Roadmap feature
- Show who's online currently in dm box
- Show activity in project/team/office page
- New admin middleware
- Tool enable/disable option in project/team/office
- Endpoint to list all tags
- Endpoint to create categories
- Endpoint to check if username exists
- Added `localize` helper function
- Shareable invite link option for registration
- Impersonate user feature for owner
- Owner/admin can remove user from project/team/office
- Update discussion posts
- Indicator for new notification and direct message
- Finnish translation
- Simplified Chinese translation

### Changed

- Upgraded to Laravel 5.8
- Upgraded to TailwindCSS 1.0
- Everything under `App` namespace is now moved to `App\Core` namespace
- Image option in discussion post has been changed (url embed instead of base64)

### Removed

- Removed `spatie/laravel-permission` package
- Removed `spatie/laravel-activitylog` package
- Removed `vue-linkify` npm package

## v0.8 (2018-10-18)

### Added

- Added swedish translation
- Added `LocalizationMiddleware` & `locale` config ([issue-211](https://github.com/iluminar/goodwork/issues/211))
- Added `lang` column in `users` table ([issue-211](https://github.com/iluminar/goodwork/issues/211))
- Added `localize` filter in global Vue ([issue-211](https://github.com/iluminar/goodwork/issues/211))
- Added comment option to tasks ([issue-205](https://github.com/iluminar/goodwork/issues/205))
- Added localization
- Added german translation
- Added spanish (Spain) translation
- Added spanish (Mexican) translation
- Added portuguese (Brazil) translation
- Added italian translation
- Added russian translation
- Added dutch translation
- Added arabic translation
- Added french translation
- Added thai translation
- Added sub task option ([issue-195](https://github.com/iluminar/goodwork/issues/195))
- Added indicator in tab menu for unread message

### Changed

- Time showed in Teamchat is now based on the user preferred timezone if set otherwise local time based on browser ([issue-280](https://github.com/iluminar/goodwork/issues/280))


## v0.7 (2018-10-13)

### Added

- Added `Quill` rich text editor on discussion section ([issue-165](https://github.com/iluminar/goodwork/issues/165))
- Added Discussion create form
- Added Discussion details modal on Discussion Board section ([issue-40](https://github.com/iluminar/goodwork/issues/40))
- Added delete option for message, project, team and office
- Added email notification on member add to project/team/office
- Added comment option to discussions

### Changed

- Updated to Laravel 5.7
- Updated docker compose to use `php:7.2-fpm` & `php:7.2-cli`


## v0.6 (2018-10-04)

### Added

- Added task delete feature on task details modal ([issue-130](https://github.com/iluminar/goodwork/issues/130))
- Added `Activities` section on Admin page ([issue-29](https://github.com/iluminar/goodwork/issues/29))
- Added Global EventBus for front end notification ([issue-143](https://github.com/iluminar/goodwork/issues/143))
- Added new permissions ('create team', 'create project', 'create office') ([issue-143](https://github.com/iluminar/goodwork/issues/143))
- Added new permissions ('create task', 'edit task', 'delete task') ([issue-130](https://github.com/iluminar/goodwork/issues/130))
- Added new welcome email to new registered user ([issue-26](https://github.com/iluminar/goodwork/issues/26))
- Added new config variable `company_name` in `config/app.php` ([issue-26](https://github.com/iluminar/goodwork/issues/26))
- Added `spatie/laravel-activitylog` package ([issue-30](https://github.com/iluminar/goodwork/issues/30))

### Changed

- Use `mix` helper instead of `asset`
- Use minified version of all asset
- Versionify & minify all assets file


## v0.5 (2018-09-16)

### Added

- Added `spatie/laravel-permission` package ([issue-152](https://github.com/iluminar/goodwork/issues/152))
- Added `GranularPermissionMiddleware` ([issue-152](https://github.com/iluminar/goodwork/issues/152))
- Added `Roles & Permissions` section on Admin page ([issue-152](https://github.com/iluminar/goodwork/issues/152))
- Added `create_permissions` helper method ([issue-152](https://github.com/iluminar/goodwork/issues/152))

### Removed

- Removed `RedirectIfNotAdmin` middleware
