@echo off
hexo generate
hexo deploy
rd .deploy /s /q
