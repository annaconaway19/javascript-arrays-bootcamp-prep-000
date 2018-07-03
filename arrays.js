var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 chocolateBars = [element, ...array];
 return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
      chocolateBars = [1, array];
       return chocolateBars;
}

function addElementToEndOfArray(array, element) {
  chocolateBars = [...array, element];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars = [array, 1];
  return chocolateBars;
}