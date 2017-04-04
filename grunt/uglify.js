/**
 * The "uglify" task
 *
 * Minify javascript files with UglifyJS.
 *
 * npm install grunt-contrib-uglify --save-dev
 * grunt.loadNpmTasks('grunt-contrib-uglify');
 */
module.exports = {
    build: {
        files: {
            //All
            'build/js/scripts/scripts.min.js': ['dev/js/scripts/scripts.js'],
            'build/js/vendors/vendor.min.js': ['dev/js/vendors/vendor.js'],
            //templates
            'build/js/templates/chooser.min.js': ['dev/js/templates/chooser.js'],
            //partials
            'build/js/scripts/slider.min.js': ['dev/js/scripts/slider.js']
        }
    }
};
