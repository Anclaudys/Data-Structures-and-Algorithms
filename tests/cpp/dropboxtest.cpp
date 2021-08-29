#include "tests.h"
#include "../../Dropbox/threecharsdistinct/index.cpp"

using namespace snowhouse;

void threeCharsDistinct_test() {
    std::string str1 = "abcdaaae";//3
    std::string str2 = "abacaba";//2
    std::string str3 = "o";//0
    std::string str4 = "ax" ;//0
    std::string str5 = "aaa";//0
    std::string str6 =  "abc"; //1
    std::string str7 = "aaaaaaaabc"; //1
    std::string str8 = "baabaabaabaabaa";//0
    std::string str9 = "jauvtaplqu";//8
    std::string str10 = "gzsjhqckwi";//8
    std::string str11= "zzanhqjpct";//7
    std::string str12 = "jecdwgqblm";//8
    std::string str13 = "prnvkgapbi";//8 std::string
  describe("threeCharsDiscint");
  it("should return the total number of three distinct consecutive characters in a string.");
  {
    AssertThat(threeCharsDistinct(str1), Is().EqualTo(3));
    AssertThat(threeCharsDistinct(str2), Is().EqualTo(2));
    AssertThat(threeCharsDistinct(str3), Is().EqualTo(0));
    AssertThat(threeCharsDistinct(str4), Is().EqualTo(0));
    AssertThat(threeCharsDistinct(str5), Is().EqualTo(0));
    AssertThat(threeCharsDistinct(str6), Is().EqualTo(1));
    AssertThat(threeCharsDistinct(str7), Is().EqualTo(1));
    AssertThat(threeCharsDistinct(str8), Is().EqualTo(0));
    AssertThat(threeCharsDistinct(str9), Is().EqualTo(8));
    AssertThat(threeCharsDistinct(str10), Is().EqualTo(8));
    AssertThat(threeCharsDistinct(str11), Is().EqualTo(7));
    AssertThat(threeCharsDistinct(str12), Is().EqualTo(8));
    AssertThat(threeCharsDistinct(str13), Is().EqualTo(8));
  }
}


#include "tests.h"

int main() {
  std::cout << "Running tests..." << std::endl;
  try
  {
    threeCharsDistinct_test();
  }
  catch (const std::exception& e)
  {
    std::cout << "\033[1;31m Tests failed!\033[0m\n " << std::endl;
    std::cout << e.what() << std::endl;
    return 1;
  }
  std::cout << "\033[1;32m Tests passed! \033[0m\n" << std::endl;
  return 0;
}


/*
 foreground background
black        30         40
red          31         41
green        32         42
yellow       33         43
blue         34         44
magenta      35         45
cyan         36         46
white        37         47

*/
