/**
 * The "watch" task
 *
 * Run tasks whenever watched files change.
 *
 * npm install grunt-contrib-watch --save-dev
 * grunt.loadNpmTasks('grunt-contrib-watch');
 */
module.exports = {
    scripts: {
        files: ['dev/less/**/*.less', 'dev/js/**/*.js'],
        tasks: ['less', 'csscomb', 'concat_css', 'concat', 'uglify'],
        options: {
            spawn: false,
        }
    }
};
