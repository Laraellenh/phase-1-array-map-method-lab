const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]
  ;
const titleCased = () => {
  // iterate through tutorials array
  return tutorials.map(singleLine => {
    // split the string of copy 
    const letters = singleLine.split(' ');
    // iterate through letters and at the 0 index, change to upper case, then gra the remain array unchanged from index 1
    const capitalLetters =
      letters.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1));
    //  join the capital letter and the rest of the array without any spaces
    const newCapitalizedTitles = capitalLetters.join('')
    // return the new array with calitalzes first letters
    return newCapitalizedTitles;
  });
}