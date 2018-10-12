# Release Notes

## v0.7 (Yet to Release)

### Added
- Added `Quill` rich text editor on discussion section ([issue-165](https://github.com/iluminar/goodwork/issues/165))
- Added Discussion create form
- Added Discussion details modal on Discussion Board section ([issue-40](https://github.com/iluminar/goodwork/issues/40))
- Added delete option for message, project, team and office
- Added email notification on member add to project/team/office

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
