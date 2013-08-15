module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['scss/*', 'js/*'],
      tasks: ['compass', 'uglify']
    },
    uglify: {
      options: {
          compress: true
      },
      build: {
          src: [
              "js/main.js"
          ],
          dest: 'build/giflife.min.js'
      }
    },
    compass: {
      build: {
        options: {
          config: 'config.rb'
        },
        src: ['scss/*']
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['watch' , 'uglify' , 'compass']);

};

// watch: {

// }