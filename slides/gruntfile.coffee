module.exports = (grunt) ->
  
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    copy:
      main:
        files: [
          {
            expand: true
            src: ['*.html']
            dest: '../source/slides/'
          }
        ]

    express:
      all:
        options:
          bases: ["./"]
          port: 8080
          hostname: "0.0.0.0"
          livereload: true

    exec:
      main: "for %i in (*.md) do cleaver %i"
    
    # grunt-watch will monitor the projects files
    # https://github.com/gruntjs/grunt-contrib-watch
    watch:
      all:
        files: [
          "**/*.html"
          "**/*.md"
        ]
        options:
          livereload: true

      exec:
        files: "**/*.md"
        tasks: ["exec"]
        options:
          livereload: true


  
  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-express"
  grunt.loadNpmTasks "grunt-exec"
  
  # Default task(s).
  grunt.registerTask "default", [
    "exec"
    "express"
    "watch"
  ]
  grunt.registerTask "pub", [
    "exec"
    "copy"
  ]
  return

