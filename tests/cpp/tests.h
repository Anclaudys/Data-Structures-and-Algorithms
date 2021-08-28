#ifndef PROBLEM_TEST
#define PROBLEM_TEST

#include "../../cpp_modules/snowhouse/snowhouse.h"

#define AssertTestFails(assertion, expected_error_text) \
  std::string SNOWHOUSE_INTERNAL_expected_error = "Test did not fail"; \
  try \
  { \
    assertion; \
  }  \
  catch (const AssertionException& exception_from_snowhouse_assertion)  \
  {  \
    SNOWHOUSE_INTERNAL_expected_error = exception_from_snowhouse_assertion.what();  \
  }  \
  AssertThat(SNOWHOUSE_INTERNAL_expected_error, Is().Containing(expected_error_text));
// clang-format on

inline void describe(const char* title)
{
  std::cout << std::endl
            << title << ":" << std::endl;
}

inline void it(const char* title)
{
  std::cout << " - " << title << std::endl;
}

#endif
