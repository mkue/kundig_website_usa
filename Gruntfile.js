module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: { // Target options
                style: 'expanded'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['*.scss'],
                    dest: 'user/themes/landio/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        uglify: {
            my_target: {
                options: {
                    beautify: true
                },
                cwd: 'user/themes/landio/js',
                files: {
                    'user/themes/landio/js/output.min.js': [
                        'user/themes/landio/js/bootstrap/util.js',
                        'user/themes/landio/js/bootstrap/alert.js',
                        'user/themes/landio/js/bootstrap/button.js',
                        'user/themes/landio/js/bootstrap/carousel.js',
                        'user/themes/landio/js/bootstrap/collapse.js',
                        'user/themes/landio/js/bootstrap/dropdown.js',
                        'user/themes/landio/js/bootstrap/modal.js',
                        'user/themes/landio/js/bootstrap/scrollspy.js',
                        'user/themes/landio/js/bootstrap/tab.js',
                        'user/themes/landio/js/bootstrap/tooltip.js',
                        'user/themes/landio/js/bootstrap/popover.js',
                        'user/themes/landio/js/plugins/*.js',
                        'user/themes/landio/js/landio.js',

                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
}
