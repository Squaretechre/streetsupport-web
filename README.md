# StreetSupport Website

The Frontend codebase for streetsupport.net.

## Git Branching

Please work in the develop branch first and only merge to staging when ready and tested, followed by merging from staging to release when signed off. Travis CI automatically builds on each commit to develop, staging and release.

* The develop branch automatically builds to: [http://dev.streetsupport.net](http://dev.streetsupport.net),
* The staging branch automatically builds to: [http://beta.streetsupport.net](http://beta.streetsupport.net),
* The release branch automatically builds to: [http://streetsupport.net](http://streetsupport.net).

## Build Status

* Dev (develop) - [![Build Status](https://travis-ci.org/StreetSupport/streetsupport-web.svg?branch=develop)](https://travis-ci.org/StreetSupport/streetsupport-web)
* Beta (staging) - [![Build Status](https://travis-ci.org/StreetSupport/streetsupport-web.svg?branch=staging)](https://travis-ci.org/StreetSupport/streetsupport-web)
* Live (release) - [![Build Status](https://travis-ci.org/StreetSupport/streetsupport-web.svg?branch=release)](https://travis-ci.org/StreetSupport/streetsupport-web)

## Install

* Install Node 4 LTS,
* (Recommended) Run in Terminal: `npm i npm -g` (Update NPM to latest version),
* Run in Terminal: `npm i gulp-cli -g` (Gulp does not need to be installed globally),
* Navigate to the workflow folder in command line Terminal,
* Run: `npm i`.

See [https://github.com/PJL101/foley](https://github.com/PJL101/foley) for more information about the workflow. This project uses version 0.2.2.

### Optional Installs

In your editor of choice, the following plugins are recommended but not required. Note the plugin names might be slightly different depending on your editor.

* editorconfig,
* tabs-to-spaces,
* linter,
* linter-handlebars,
* linter-js-standard,
* linter-stylelint.

## Usage

Run these tasks in your command line Terminal:

`gulp [--production] [--debug]`

`gulp deploy [--production] [--debug]`

`gulp auditcode`

* The `gulp` task builds the website, watches for changes and starts up a sever,
* The `gulp deploy` task builds the website without watching for changes or running the server,
* The `gulp auditcode` task runs various linting on the project source files.
* The `--production` flag builds minified assets with no sourcemaps,
* The `--debug` flag shows the files being created in each task (if the task has a pipe).

## Frontend Conventions

Happy to discuss any of this:

* The SCSS uses BEM and mobile first,
* Try to modularise & reuse style components (if possible),
* Add each new component to _components.hbs,
* Webpack is used, so try and follow the ES2015 module structure,
* Vanilla JavaScript is in use with minimal libraries, try to install framework/modules only when needed,
* No Angular or similar please (for now!),
* ES2015 is fully supported in the workflow,
* Client side templating (Hogan.js/mustache) is in use but do any logic in the API/JavaScript. Use templating for rendering output only,
* To use client side templating, you must use a \ before each statement.
