// Code your solution here


// let even = arr.filter(n => {
//     return n % 2 === 0;
//   });

function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.startsWith(string)
    });
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name === string 
    });
}


// function findMatching(drivers, name) {
//     return drivers.filter((driver) => {return driver.toLowerCase() === name.toLowerCase()});
// }