@echo off
del db.json
copy theme_config.yml themes\iceman\_config.yml /y
copy introduction.ejs themes\iceman\layout\_widget\introduction.ejs /y
call hexo server
