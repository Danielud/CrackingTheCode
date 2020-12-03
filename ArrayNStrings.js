//TODO: 1.1 Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?

function isUnique(str) {
  console.log(str);
  let oger = {};
  for (var i = 0; i < str.length; i++) {
    console.log(oger);
    if (oger[str[i]]) {
      return false;
    } else {
      oger[str[i]] = str[i];
    }
  }
  return true;
}

console.log(isUnique("Daniel"));
