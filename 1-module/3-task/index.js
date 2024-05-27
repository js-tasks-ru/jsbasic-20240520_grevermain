function ucFirst(str) {
  if (str === "") {
      return "";
  }

  if (str.length === 1) {
      return str[0].toUpperCase();
  } else {
      return str[0].toUpperCase() + str.slice(1);
  }
}

console.log(ucFirst("v"));
console.log(ucFirst("vas"));
console.log(ucFirst(""));