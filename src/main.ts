export default class Main {
  foo() {
    return 1;
  }
}

const main = new Main();

console.log(`Hello from script, Foo: ${main.foo()}`);
