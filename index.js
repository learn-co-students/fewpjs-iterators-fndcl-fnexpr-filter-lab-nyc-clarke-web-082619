// Code your solution here

function findMatching(drivers, string){
    let results = drivers.filter(driver =>{
        console.log(driver.toUpperCase() + " " + string.toUpperCase())
        return driver.toLowerCase() === string.toLowerCase();
    })
    return results
}

function fuzzyMatch(drivers, string){
    let results = drivers.filter(driver =>{
        console.log(string + " " +driver)
        return driver.substring(0, string.length)== string;
    });
    return results;
}

function matchName(drivers, string){
    let results = drivers.filter(driver =>{
        return driver.name == string;
    });
    return results
}

