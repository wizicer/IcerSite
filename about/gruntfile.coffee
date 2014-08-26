module.exports = (grunt) ->
  
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    uglify:
      options:
        banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"

      build:
        src: "src/<%= pkg.name %>.js"
        dest: "build/<%= pkg.name %>.min.js"

    less:
      dev:
        options:
          paths: ["css"]

        files:
          "css/style.css": "less/style.less"

      prod:
        options:
          paths: ["css"]
          cleancss: true
          modifyVars:
            imgPath: "\"http://mycdn.com/path/to/images\""
            bgColor: "red"

        files:
          "css/style.css": "less/style.less"

    jade:
      dev:
        options:
          data:
            debug: true

          pretty: true

        files:
          "index.html": "index.jade"

      prod:
        options:
          data:
            debug: false

        files:
          "index.html": "index.jade"

    express:
      all:
        options:
          bases: ["./"]
          port: 8080
          hostname: "0.0.0.0"
          livereload: true

    
    # grunt-watch will monitor the projects files
    # https://github.com/gruntjs/grunt-contrib-watch
    watch:
      all:
        files: [
          "**/*.html"
          "**/*.js"
          "**/*.css"
        ]
        options:
          livereload: true

      jade:
        files: "**/*.jade"
        tasks: ["jade:dev"]
        options:
          livereload: true

      css:
        files: "**/*.less"
        tasks: ["less:dev"]
        options:
          livereload: true

  
  # Load the plugin that provides the "uglify" task.
  #   grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks "grunt-contrib-less"
  grunt.loadNpmTasks "grunt-contrib-jade"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-express"
  
  # Default task(s).
  grunt.registerTask "default", [
    "less:dev"
    "jade:dev"
    "express"
    "watch"
  ]
  grunt.registerTask "prod", [
    "less:prod"
    "jade:prod"
  ]
  return

