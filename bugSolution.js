function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0 || a > 1000) { // Add a check for excessively large 'a'
      return Infinity; // Or handle the error appropriately
  }
  return foo(a - 1, a + b);
}