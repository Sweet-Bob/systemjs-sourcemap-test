const gulp = require('gulp');
const runSequence = require('run-sequence');
const Builder = require('systemjs-builder');
const shell = require('gulp-shell');

gulp.task('compile', () => {
    return gulp.src('')
               .pipe(shell([
                   './node_modules/typescript/bin/tsc -p tsconfig.json'
               ]));
});

gulp.task('build', function () {
    const builder = new Builder('.', 'system.config.js');
    return builder.buildStatic('./index.js', 'bundle.js', {
        sourceMap: true
    });
});

gulp.task('default', (cb) => runSequence('compile', 'build', cb));