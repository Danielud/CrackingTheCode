//TODO: Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer.

function isUnique(str) {
  console.log(str);
  let oger = {};
  for (var i = 0; i < str.length; i++) {
    if (oger[str[i]]) {
    } else {
      oger[str[i]] = str[i];
    }
  }
  return oger;
}

console.log(isUnique("daaaa"));
