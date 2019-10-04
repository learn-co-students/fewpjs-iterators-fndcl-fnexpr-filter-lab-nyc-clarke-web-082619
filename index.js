// Code your solution here
const findMatching = (drivers, string) => {
    return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase())
    }



const fuzzyMatch = (drivers, string) => {
    let stringLength = string.length;
    return drivers.filter(function(driver){
      return driver.slice(0, stringLength) === string
    });
}

const matchName = (drivers, string) => {
    return drivers.filter( driver => driver.name === string)
}
