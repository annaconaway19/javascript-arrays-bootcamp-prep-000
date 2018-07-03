var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 chocolateBars = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
       return chocolateBars.push('twix');
}