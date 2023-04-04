const initialCap = (stringInput) => {
  let capMade;
  if (stringInput.length === 1){
    capMade = stringInput[0].toUpperCase();
  } else if (stringInput.length > 1) {
    capMade = stringInput.charAt(0).toUpperCase() + stringInput.slice(1);  
  } else {
    throw new Error ('Input String is empty');
  }  
  return capMade;
}

module.exports = initialCap;