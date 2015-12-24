/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        useminPrepare: {
            html: 'client/index.html',
            options: {
                dest: 'dist/client'
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        src: 'client/index.html',
                        dest: 'dist/client/index.html'
                    },
                    {
                        expand: true,
                        cwd: 'client/bower_components/bootstrap',
                        src: 'fonts/*',
                        dest: 'dist/client'
                    },
                    {
                        expand: true,
                        src: 'client/app/*/views/**',
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        src: 'server/**',
                        dest: 'dist'
                    },
                    {
                        src: 'package.json',
                        dest: 'dist/package.json'
                    }
                ]
            }
        },
        usemin: {
            html: ['dist/client/*.html'],
        },
        clean: {
            tmp: ['.tmp'],
            dist: ['dist']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    // Default task.
    grunt.registerTask('dist', [
        'clean:dist',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'copy:dist',
        'usemin',
        'clean:tmp'
    ]);

    grunt.registerTask('default', ['dist']);
};