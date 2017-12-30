
// inWord Function - checks whether the letter is in the word or not.

function inWord(letter, word) {
	if (word.includes(letter)) {
  return "This letter is in the word!";
  } else {
  return "This letter is not in the word, please try again.";
  }
}

console.log(inWord("h", "harry")); // Yes, should be true.
console.log(inWord("d", "Michael")); // No, should be false.


// timesInWord Function - checks how many times the letter appears in the word.
  
function timesInWord(letter, word) {
  var re = new RegExp(letter,"gi");
  var isMatch = word.match(re);
  if (isMatch != null) {
   return isMatch.length;
   } else {
   return "No Match, Try again!";
  }
}

console.log(timesInWord("i", "Mississippi")); // Should be 4 times
console.log(timesInWord("J", "Kiarra")); // Should be None.


