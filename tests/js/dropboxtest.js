const chai = require('chai');
const { expect } = chai;
const { threeCharsDistinct } = require('../../Dropbox/threecharsdistinct');
const { workingButtons } = require('../../Dropbox/workingbuttons');
const { sortChessSubsquares } = require('../../Dropbox/sortChessSubsquares');
const { countAlteringParity } = require('../../Dropbox/countAlteringParity');

describe('Dropbox Test', () => {
  describe('threeCharsDistinct', () => {
    const str1 = 'abcdaaae'; //3
    const str2 = 'abacaba'; //2
    const str3 = 'o'; //0
    const str4 = 'ax'; //0
    const str5 = 'aaa'; //0
    const str6 = 'abc'; //1
    const str7 = 'aaaaaaaabc'; //1
    const str8 = 'baabaabaabaabaa'; //0
    const str9 = 'jauvtaplqu'; //8
    const str10 = 'gzsjhqckwi'; //8
    const str11 = 'zzanhqjpct'; //7
    const str12 = 'jecdwgqblm'; //8
    const str13 = 'prnvkgapbi'; //8
    it('Should return the highest number of adjacent triplets', () => {
      expect(threeCharsDistinct(str1)).to.equal(3);
      expect(threeCharsDistinct(str2)).to.equal(2);
    });
  });

  describe('workingButtons', () => {
    it('', () => {
      const case1 = {
        digits: [2, 3],
        words: ['abc', 'gdef'], // [true, false].
      };
      const case2 = {
        digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        words: ['abc', 'gdef', 'x'],
      }; //[true, true, true]
      const case3 = {
        digits: [3, 6, 7, 9],
        words: ['word', 'door', 'window'],
      }; //[true, true, false]
      const case4 = {
        digits: [0, 1],
        words: ['winter', 'summer', 'spring', 'autumn'],
      }; //[false, false, false, false]
      const case5 = {
        digits: [3, 5, 6, 7, 9],
        words: ['flower', 'rose'],
      }; //[true, true]
      const case6 = {
        digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        words: ['sun', 'star', 'moon'],
      }; //[true, true, true]
      const case7 = {
        digits: [2, 3, 5, 6, 7],
        words: ['apple', 'pear', 'banana', 'strawberry'],
      }; //[true, true, true, false]
      const case8 = {
        digits: [2],
        words: ['dddddddddddddddddddddddddddddddddddddddddddddddddd'],
      }; //[false]
      expect(workingButtons()).to.equal();
      expect(workingButtons()).to.equal();
      expect(workingButtons()).to.equal();
      expect(workingButtons()).to.equal();
      expect(workingButtons()).to.equal();
      expect(workingButtons()).to.equal();
      expect(workingButtons()).to.equal();
      expect(workingButtons()).to.equal();
    });
  });

  describe('sortChessSubsquares', () => {
    expect(sortChessSubsquares()).to.equal();
    expect(sortChessSubsquares()).to.equal();
    expect(sortChessSubsquares()).to.equal();
    expect(sortChessSubsquares()).to.equal();
    expect(sortChessSubsquares()).to.equal();
    expect(sortChessSubsquares()).to.equal();
    expect(sortChessSubsquares()).to.equal();
    expect(sortChessSubsquares()).to.equal();
  });

  describe('countAlteringParity', () => {
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
    expect(countAlteringParity()).to.equal();
  });
});
