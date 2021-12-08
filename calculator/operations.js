function operations (a, op, b) {
  switch (op) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
  }
}
module.exports = operations ;