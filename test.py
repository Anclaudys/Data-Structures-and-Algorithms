import os
import sys
import platform
import subprocess
import time

def os_config():
  info = platform.uname()
  if sys.argv[1] == "node":
    node_test()
  if sys.argv[1] =='cpp':
    if(info.system =="Windows"):
      win_cpp()

def win_cpp():
  if sys.argv[1] == 'cpp':
    os.system(f"cmd /c g++ tests/cpp/{sys.argv[2]}test.cpp -o tests/cpp/_run/{sys.argv[2]}test")
    t = 3
    while not os.path.isfile(f"tests/cpp/_run/{sys.argv[2]}test.exe"):
      countdown(t)
    testfile = os.path.join(f"tests//cpp/_run/{sys.argv[2]}test.exe")
    subprocess.call([testfile])
    os.remove(f"tests/cpp/_run/{sys.argv[2]}test.exe")

def countdown(t):
  while t:
    mins, secs = divmod(t, 60)
    timer = '{:02d}:{:02d}'.format(mins, secs)
    print("Compiling... ", timer, end="\r")
    time.sleep(1)
    t -= 1


def node_test():
  testfile = os.path.join(f"tests/js/{sys.argv[2]}test.js")
  os.system(f"cmd /c npm test {testfile}")







os_config()

