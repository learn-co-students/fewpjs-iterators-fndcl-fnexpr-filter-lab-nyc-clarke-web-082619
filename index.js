// Code your solution here
function findMatching(array, name) {
    let response = array.filter(driver => driver.toUpperCase() === name.toUpperCase())
    return response
}

function fuzzyMatch(array, str){
    let length = str.length;
    let response = array.filter(driver => driver.slice(0, length) === str);
    return response
}

function matchName(array, str){
    let response = array.filter(driver => driver.name === str)
    return response
}