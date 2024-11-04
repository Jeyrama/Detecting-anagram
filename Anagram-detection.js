/*
An anagram is the result of rearranging the 
letters of a word to produce a new word.

Complete the function to return true if the two arguments 
given are anagrams of each other; return false otherwise.

Note: anagrams are case insensitive

Examples:
  "foefet" is an anagram of "toffee"
  "Buckethead" is an anagram of "DeathCubeK"
*/


// Solution

let isAnagram = function(test, original) {
  if(test.length !== original.length) { return false }
  return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("")
};

// or

let isItAnagram = function(test, original) {
  if (test.length !== original.length) return false;
  test = test.toUpperCase();
  original = original.toUpperCase();
  const m1 = getMap(test);
  const m2 = getMap(original);
  return Object.keys(m1).every((key) => m1[key] === m2[key]);
};

function getMap(word) {
  return word.split('').reduce((a, l) => {
    a[l] ? a[l]++ : a[l] = 1;
    return a;
  }, {});
}