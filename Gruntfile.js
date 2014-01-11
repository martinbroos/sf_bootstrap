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
            watch: {
                options: {
                    config: 'compass.rb',
                    outputStyle: 'expanded',
                    watch: true
                }
            },
            deploy: {
                options: {
                    config: 'compass.rb',
                    environment: 'production',
                    outputStyle: 'compressed',
                    force: true
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'web/assets/src/js',
                    src: '**/*.js',
                    dest: 'web/assets/dist/js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['compass:dev']);
    grunt.registerTask('watch', ['compass:watch']);
    grunt.registerTask('deploy', ['compass:deploy']);
};
