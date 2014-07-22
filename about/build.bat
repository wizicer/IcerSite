@echo off
call jade index.jade
rem call lessc --verbose less\style.less css\style-dev.css
call lessc --verbose -x less\style.less css\style.css
call uglifyjs js-dev\skillsdata.js js-dev\skill.js -o js\main.min.js -c -m
