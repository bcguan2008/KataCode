/* new 对象的三种方式：*/

var foo1 = function(){console.log('foo1')}


function foo2(){
   console.log('foo2');
}


var foo3 = new Function()

console.log(foo1);
console.log(foo2);
console.log(foo3);

