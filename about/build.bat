@echo off
call jade -P index.jade
call lessc --verbose less\style.less css\style.css
