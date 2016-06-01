/* @flow */

function foo(x: number): number {
  return x * 10;
}

let obj = { foo: foo }

export default obj
