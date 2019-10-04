// Code your solution here

function findMatching(drivers, str) {
    return drivers.filter(driver => {return driver.toUpperCase() === str.toUpperCase()});
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => {return driver[0] === str[0]});
}

function matchName(drivers, str) {
    return drivers.filter(driver => {return driver.name === str})

}