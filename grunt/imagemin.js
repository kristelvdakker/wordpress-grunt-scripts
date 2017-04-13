/**
 * The "imagemin" task
 *
 * Minify PNG and JPEG images.
 *
 * npm install grunt-contrib-imagemin --save-dev
 * grunt.loadNpmTasks('grunt-contrib-imagemin');
 */
module.exports = {
    options: {
        cache: false
    },
    dist: {
        files: [{
            expand: true,                   // Enable dynamic expansion
            cwd: 'dev/img/',                // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],    // Actual patterns to match
            dest: 'build/img/'              // Destination path prefix
        }]
    }
};
