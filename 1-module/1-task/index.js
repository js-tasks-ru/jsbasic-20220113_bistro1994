function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    let result = 1;
    while(n) {
      result *= n;
      n--;
  }
    return result;
}
}