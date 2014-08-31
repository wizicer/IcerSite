@echo off
del db.json
copy theme_config.yml themes\iceman\_config.yml /y
call hexo server
