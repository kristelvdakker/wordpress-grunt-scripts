/**
 * The "csscomb" task
 *
 * The grunt plugin for sorting CSS properties in specific order.
 *
 * npm install grunt-csscomb --save-dev
 * grunt.loadNpmTasks('grunt-csscomb');
 */
module.exports = {
    dev: {
        options: {
            config: '.csscombDev.json'
        },
        expand: true,
        cwd: 'dev/less/',
        src: ['**/*.less', '**/!*.resorted.less'],
        dest: 'dev/less/'
    },
    build: {
        expand: true,
        cwd: 'build/css/',
        src: ['**/*.css', '!*.resorted.css'],
        dest: 'build/css/'
    }
};
