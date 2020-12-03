function reverse(str) {
  var split = str.split("");
  var reversedString = "";
  for (let char of split) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

console.log(reverse("Daniel@3234@!434 lika jin shmuel daniel"));
console.log(reverse("Daniel"));
console.log(reverse("Daniel@3"));
