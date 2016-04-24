@echo off
copy theme_config.yml themes\iceman\_config.yml /y
call hexo deploy
rd .deploy_git /s /q
pause finished.
