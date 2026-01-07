//Fibonacci generator
function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield b;
    [a, b] = [b, a + b];
  }
}
const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
