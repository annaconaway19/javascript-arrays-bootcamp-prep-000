var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 array = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
       return chocolateBars.push('twix');
}