var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 chocolateBars = [element, ...array];
 return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
      chocolateBars = array.unshift(element);
       return array;
}

function addElementToEndOfArray(array, element) {
  chocolateBars = [...array, element];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars = array.push(element);
  return array;
}

function accessElementInArray(array) {
  return array[2];
}

function removeElementFromBeginningOfArray(array) {
  chocolateBars = array.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  chocolateBars = array.pop();
  return array;
}