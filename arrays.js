var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, x) {
  x = 'reeses';
  return [...chocolateBars, x]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x) {
       return chocolateBars.push('twix');
}