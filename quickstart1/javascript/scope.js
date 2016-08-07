/**
 * 作用域
 */
var x = 0;
function foo() {
  console.log(x);
}

function bar() {
  var x = 20;
  foo();
}

bar();