/**
 * The 'less' task
 *
 * Compile LESS files to CSS.
 *
 * npm install grunt-contrib-less --save-dev
 * grunt.loadNpmTasks('grunt-contrib-less');
 */
module.exports = {
    dev: {
        options: {
            compress: true,
            yuicompress: true,
            optimization: 2
        },
        files: {
            //partials
            'build/css/partials/general.css': 'dev/less/partials/general.less',
            'build/css/partials/normalize.css': 'dev/less/partials/normalize.less',
            'build/css/partials/typography.css': 'dev/less/partials/typography.less',
            'build/css/partials/elements.css': 'dev/less/partials/elements.less',
            'build/css/partials/forms.css': 'dev/less/partials/forms.less',
            'build/css/partials/navigation.css': 'dev/less/partials/navigation.less',
            'build/css/partials/accessibility.css': 'dev/less/partials/accessibility.less',
            'build/css/partials/alignments.css': 'dev/less/partials/alignments.less',
            'build/css/partials/clearings.css': 'dev/less/partials/clearings.less',
            'build/css/partials/widgets.css': 'dev/less/partials/widgets.less',
            'build/css/partials/content.css': 'dev/less/partials/content.less',
            'build/css/partials/scroll.css': 'dev/less/partials/scroll.less',
            'build/css/partials/media.css': 'dev/less/partials/media.less',
            'build/css/partials/branding.css': 'dev/less/partials/branding.less',
            //admin
            'build/css/admin/chooser.css': 'dev/less/admin/chooser.less',
            //templates
            'build/css/templates/chooser.css': 'dev/less/templates/chooser.less',
            'build/css/templates/team.css': 'dev/less/templates/team.less'
        }
    }
};
