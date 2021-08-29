import os
import sys
import platform

def os_config():
  info = platform.uname()
  if(info.system =="Windows"):
    print("It's windows")
    win_cmd()

def win_cmd():
  if sys.argv[1] == 'cpp':
    os.system(f'cmd /c g++ tests/cpp/dropboxtest.cpp"')
    os.system('cmd /c .\\a.exe')








os_config()
