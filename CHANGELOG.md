# Release Notes

## v0.9 (Yet to release)

- Added direct message to a user functionality
- Added mentioning user functionality in comment & message
- Added endpoint to list all tags
- Added endpoint to create categories
- Added file upload option in file section
- Added endpoint to check if username exists
- Added finnish translation
- Added simplified Chinese translation
- Added `localize` helper function

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
