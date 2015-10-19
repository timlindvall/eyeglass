"use strict";

var eslint = require("gulp-eslint");
var config = require("eyeglass-dev-eslint");

module.exports = function(gulp, depends) {
  gulp.task("lint", depends, function() {
    return gulp.src(["*.js", "{build,lib,test}/**/*.js"])
        .pipe(eslint(config))
        .pipe(eslint.formatEach("stylish", process.stderr))
        .pipe(eslint.failOnError());
  });
};
