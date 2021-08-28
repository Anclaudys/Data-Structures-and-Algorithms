You found an old push-button phone in your room, but unfortunately some of the buttons are broken and can't be pushed anymore. To test the phone, you decided to try typing a message to your friend. Your task is to find which words of this message will be possible to type using the broken keypad.

You are given an array of integers digits representing the set of phone buttons which are still working. You are also given an array of strings words containing the words you'd like to type in your message. Return an array of booleans, where the ith element is true if it is possible to type the ith word, and false otherwise.

Here is how the push-button phone looks like:

phone

Example

For digits = [2, 3] and words = ["abc", "gdef"], the output should be workingButtons(digits, words) = [true, false].

Only digits 2 and 3 are still working on your phone, so only the letters a, b, c, d, e, f can be typed. It would be possible to type the first word, but not the second one - it contains the letter g, which can't be typed.

For digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] and words = ["abc", "gdef", "x"], the output should be workingButtons(digits, words) = [true, true, true].

All buttons are still working, so you can type any word.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer digits

An array of integers representing the phone buttons which are still working. It is guaranteed that all digits in this array are pairwise distinct.
