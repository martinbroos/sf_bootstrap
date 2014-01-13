module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sourceDir: 'web/assets/src',
        distDir: 'web/assets/dist',
        vendorDir: 'web/assets/vendor',
        compass: {
            dev: {
                options: {
                    config: 'compass.rb',
                    outputStyle: 'expanded',
                    force: true
                }
            },
            dist: {
                options: {
                    config: 'compass.rb',
                    environment: 'production',
                    outputStyle: 'compressed',
                    force: true
                }
            }
        },
        // Concat & minify
        uglify: {
            dev: {
                options: {
                    mangle: false,
                    compress: false,
                    preserveComments: 'all',
                    beautify: true
                },
                files: {
//                    'web/assets/dist/js/vendor.js': [
//                        'web/assets/vendor/**/*.js',
//                    ],
                    'web/assets/dist/js/script.js': [
                        'web/assets/src/js/*.js',
                        '!web/assets/src/js/*.min.js'
                    ]
                }
            },
            dist: {
                options: {
                    mangle: true,
                    compress: true
                },
                files: {
//                    'web/assets/dist/js/vendor.js': [
//                        'web/assets/vendor/**/*.js',
//                    ],
                    'web/assets/dist/js/script.js': [
                        'web/assets/src/js/*.js',
                        '!web/assets/src/js/*.min.js'
                    ]
                }
            }
        },
        jshint: {
            all: [
                'web/assets/src/js/*.js',
                '!web/assets/src/js/*.min.js',
                'Gruntfile.js'
            ]
        },

        // Watch for changes and trigger compass, jshint, uglify
        watch: {
            compass: {
                files: ['web/assets/src/sass/{,**/}*.scss'],
                tasks: ['compass:dev']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify:dev']
            }
        },

        exec: {
            bower: {
                cmd: 'bower install'
            },

            composer: {
                cmd: 'composer install'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('build', [
        'exec:composer',
        'exec:bower',
        'jshint',
        'uglify:dist',
        'compass:dist'
    ]);

    grunt.registerTask('default', [
        'exec:composer',
        'exec:bower',
        'jshint',
        'uglify:dev',
        'compass:dev'
    ]);
};
