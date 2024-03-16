//Eslint esversion:6
function makeMultiFilter(originalArray) {
    let currentArray = originalArray.slice(); 
  
    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }
  
        currentArray = currentArray.filter(filterCriteria);
  
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }
        
        return arrayFilterer; 
    }
  
    return arrayFilterer;
  }