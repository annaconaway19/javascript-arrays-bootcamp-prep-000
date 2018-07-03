var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 chocolateBars = [element, ...array];
 return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
      chocolateBars = array.unshift(element);
       return chocolateBars;
}

function addElementToEndOfArray(array, element) {
  chocolateBars = [...array, element];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars = array.push(element);
  return chocolateBars;
}