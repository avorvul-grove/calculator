export const calculator = (a: number, op: string, b: number): number => {
  let result: number = 0;
  switch (op) {
    case '*':
      result = a * b;
    case '+':
      result = a + b;
    case '-':
      result = a - b;
    case '/':
      result = a / b;
  }
  return result;
}