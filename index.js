stringLength = (string) => string.length;

valideString = (string) =>{
  const lenght = stringLength(string);
  if((lenght>0)&&(lenght<=10)){
    return true;
  }
  else{
    return false;
  }
}

/*
testing part
*/

/*
*Arrange
*/
const param1 = 'this is a test string for testing purpose';
const param2 = 'tester';

//Act
const response = stringLength(param1);
const response2 = valideString(param1);
const response3 = valideString('');
const response4 = valideString(param2);

//Assert
expect(response).toMatch(15);
expect(response2).toMatch(false);
expect(response3).toMatch(false);
expect(response4).toMatch(true);