function ucFirst(str) {
  if (str == '') return str.charAt();
  else {
  let nstr = str[0].toUpperCase() + str.slice(1);
    return nstr;
    }
}
