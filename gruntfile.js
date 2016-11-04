module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        dist: {
            src: ['css/body.css', 'css/header.css', 'css/main.css'],
            dest: 'css/dist/main.css'
        }
    },
    cssmin: {
      target: {
        files: {
          'css/dist/main.min.css': ['css/dist/main.css']
        }
      }
    },
    uglify: {
      src: {
        files: {
            'js/dist/main.min.js': ['js/index.js']
          }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};