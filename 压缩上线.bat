@echo off
title ѹ��B2Cǰ�˴���

@echo 1.���ڸ���SVN��please wait...
svn update
ping -n 3 127.0.0.1 >nul

start cmd /k "gulp pureBuild"
ping -n 3 127.0.0.1 >nul

color 67
@echo 2.���Ե�������Ŀ������ɺ����⽡����... &pause>nul
@echo off

title 3.���ڴ�������Ե�...
@echo 3.���ڴ�������Ե�...

set dir=����Ŀ¼

set zipname=2c.zip
cls
echo ѹ�������棬��ʱ����ָ��Ϊ��gulp pureBuild'���ļ���СԼΪ4M���ң����
IF EXIST %zipname% (del %zipname%)
del %dir%\%zipname% 
@echo ���½�ѹ��ǰ�˴�����Դ�����棬��Ϊ��ʽ�������������߸���ʱע�ⲻҪ�޸������ļ��е�webconfig.js�ļ�
7z a %zipname% "dist" "favicon.ico" "humans.txt" "robots.txt" "*.html" "webconfig.js" 
@echo ѹ���ɹ�
color 2F
title �����ɡ�
@echo �����ɣ�2S�Զ��˳�
start .
ping -n 3 127.0.0.1 >nul && exit()