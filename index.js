let findMatching = (drivers, string) => {
    let filtered_drivers = drivers.filter(d => {
        return d.toUpperCase() === string.toUpperCase()
    })
    return filtered_drivers
} 

let fuzzyMatch = (drivers, string) => {
    let fuzzy_drivers = drivers.filter(d => {
        return d.charAt(0).toUpperCase() === string.charAt(0).toUpperCase()
    })
    return fuzzy_drivers
}

let matchName = (drivers, string) => {
    let match_drivers = drivers.filter(d => {
        return d.name.toUpperCase() === string.toUpperCase()
    })
    return match_drivers
}