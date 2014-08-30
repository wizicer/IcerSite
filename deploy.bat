@echo off
call hexo generate
call hexo deploy
rd .deploy /s /q
pause finished.
