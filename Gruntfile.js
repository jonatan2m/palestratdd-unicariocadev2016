module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),               
    jasmine : {
      // Arquivos que você quer testar
      src : [
      'js/*.js'      
      ],
      // Seus testes com Jasmine
      options: {
        specs : 'specs/*.js'        
      }
    },

    jshint: {
      //Arquivos que você quer avaliar com o jshint
      files: [
      'Gruntfile.js',
      'js/*.js',      
      'specs/*.js'        
      ],      
      options: {        
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    /*notify_hooks: {
      options: {
        enabled: true,
        max_js_hint_notifications: 5,
        title: 'Cookiejar'
      }
    },*/
    watch: {
      files: ['<%= jshint.files %>', 'js/*.js', 'specs/*.js'],
      tasks: ['jshint', 'jasmine'] 
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  //grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // This plugin provides the "connect" task.
  //grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['jshint', 'jasmine']);

  // Esta linha é obrigatória caso você queira usar no notify_hooks:options
  //grunt.task.run('notify_hooks');
};