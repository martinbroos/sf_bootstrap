============
sf_bootstrap
============

Symfony 2 Site Bootstrap

- grunt (init project -- composer install / bower install / uglify / jshint / compass)
- grunt watch (when developing javascript or sass)
- grunt build (before production deploy to compress everything)

Project deploy
---------------

- grunt build
- php app/console project:deploy --go prod ( remove --go to simulate )
