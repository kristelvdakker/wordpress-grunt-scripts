/**
 * The "concat" task
 *
 * Concatenate files.
 *
 * npm install grunt-contrib-concat --save-dev
 * grunt.loadNpmTasks('grunt-contrib-concat');
 */
module.exports = {
    options: {
        stripBanners: true
    },
    dev: {
        src: ['dev/js/scripts/**.js', '!dev/js/scripts/scripts.js'],
        dest: 'dev/js/scripts/scripts.js',
        nonull: true
    },
    build: {
        src: ['dev/js/vendors/**.js', '!dev/js/vendors/vendor.js'],
        dest: 'dev/js/vendors/vendor.js',
        nonull: true
    }
};
