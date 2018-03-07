// Variablen an eine Funktion binden

function addition(x, y) {
  return x + y;
}

function subtraktion(x, y) {
  return x - y;
}

function multiplikation(x, y) {
  return x * y;
}

function division(x, y) {
  return x/y;
}

let operation = addition;

console.log("add 1 + 2 with addition(): " + addition(1, 2));
console.log("add 1 + 2 with operation(): " + operation(1, 2));

console.log("------------");
// Funktionen in einem Array

let operationen = [
  addition,
  subtraktion,
  multiplikation,
  division
];

console.log(operationen[0]);

for(let i in operationen) {
  console.log(operationen[i](1, 2));
}

console.log("------------");
// Funktion mit Funktion als Parameter

function metaOperation(aFunc, x, y) {
  return aFunc(x, y);
}

console.log(metaOperation(addition, 1, 2));

console.log("------------");
// Funktionen können andere Funktionen als Rückgabewert übergeben

function operationenFabrik(name) {
  switch(name) {
    case 'addition': return (x, y) => x + y;
    case 'subtraktion': return (x, y) => x - y;
    case 'multiplikation': return (x, y) => x * y;
    case 'division': return (x, y) => x / y;
    default: return () => NaN;
  }
}
let addition1 = operationenFabrik('addition');
console.log(addition1(2, 2));

console.log(operationenFabrik('addition')(2,3));

console.log("------------");
// Funktion in Funktionen

function operationContainer(x, y) {
  let addition = (x, y) => x + y;
  let subtraktion = (x, y) => x - y;
  // ...

  console.log(addition(x, y));
}

operationContainer(5, 5);
