// Code your solution here

const findMatching = (drivers, string) => {
    let filtered_drivers = drivers.filter( driver => {
        return driver.toUpperCase() === string.toUpperCase()
    }) 
    return filtered_drivers 
}

const fuzzyMatch = (drivers, string) => {
    let fuzzy_drivers = drivers.filter( driver => {
        return driver.charAt(0).toUpperCase() === string.charAt(0).toUpperCase()
    })
    return fuzzy_drivers
}

const matchName = (drivers, string) => {
    let match_drivers = drivers.filter( driver => {
        return driver.name === string 
    
    })
    return match_drivers    
}
