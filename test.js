import Calculator from "./calculator.js";

const calcul = new Calculator();


descibe('calculator test',()=>{
  test('add method test', () => { 
    expect(calcul.add(3,6)).toMatch(9); 
  });
  test('reduce method test', () => { 
    expect(calcul.reduce(6,3)).toMatch(3); 
  });
  test('multiply method test', () => { 
    expect(calcul.multiply(3,6)).toMatch(18); 
  });
  test('divide method test', () => { 
    expect(calcul.divide(6,3)).toMatch(2); 
  });

});
descibe('capitalize method test',()=>{
  test('capitalize(param)',()=>{
    expect(capitalize('tester')).toMatch('Tester');
  });
})