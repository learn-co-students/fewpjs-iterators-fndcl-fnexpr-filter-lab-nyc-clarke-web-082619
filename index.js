// Code your solution here
function findMatching (drivers, target) {
    return drivers.filter(driver => driver.toUpperCase() === target.toUpperCase());
}

function fuzzyMatch (drivers, target) {
    return drivers.filter(driver => driver.substring(0,target.length) === target);
}

function matchName (drivers, target) {
    return drivers.filter(object_driver => object_driver.name === target);
}
