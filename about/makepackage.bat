@echo off
path %PATH%;C:\Program Files\7-Zip

del resume.7z
echo index.html>filelist
echo css>>filelist
echo js>>filelist
rem echo video>>filelist
echo font>>filelist
echo img>>filelist
7z a resume.7z -mx9 @filelist
del filelist

