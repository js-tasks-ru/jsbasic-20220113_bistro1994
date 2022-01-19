function ucFirst(str) {
  if (str == '') return str.charAt();
  else if (str.lenght == 1) return str[0].toUpperCase();
    else {
  let nstr = str[0].toUpperCase() + str.slice(1);
    return nstr;
    }
}
