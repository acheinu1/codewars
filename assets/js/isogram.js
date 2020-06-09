// An isogram is a word that has no repeating letters,
//  consecutive or non-consecutive. Implement a function
//  that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram

function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i) {
    for (j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}


//222222222222222222222222222222222

function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
  //z.
  return str.match(/\W|\d|_/g)?false:!/([a-z]).*?\1/i.test(str);
