/**
 * The "concat_css" task
 *
 * The grunt plugin for sorting CSS properties in specific order.
 *
 * npm install grunt-concat-css --save-dev
 * grunt.loadNpmTasks('grunt-concat_css');
 */
module.exports = {
    options: {
        // Task-specific options go here.
    },
    all: {
        src: [
            //'build/css/partials/general.css',
            'build/css/partials/normalize.css',
            'build/css/partials/typography.css',
            'build/css/partials/elements.css',
            'build/css/partials/forms.css',
            'build/css/partials/navigation.css',
            'build/css/partials/accessibility.css',
            'build/css/partials/alignments.css',
            'build/css/partials/clearings.css',
            'build/css/partials/widgets.css',
            'build/css/partials/content.css',
            'build/css/partials/scroll.css',
            'build/css/partials/media.css',
            'build/css/partials/branding.css'
        ],
        dest: 'build/css/global.css'
    }
};
