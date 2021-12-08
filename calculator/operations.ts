type Operation = '+' | '-' | '*' | '/';

export const calculator = (a: number, op: Operation, b: number): number => {
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