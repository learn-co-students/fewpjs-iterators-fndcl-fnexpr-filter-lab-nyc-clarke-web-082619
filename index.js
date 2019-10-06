function findMatching(drivers, s) { 
    let matching_driver = drivers.filter( d => {
        return d.toLowerCase() === s.toLowerCase();
    })
    return matching_driver
} 

function fuzzyMatch(drivers, s) { 
    let matching_letter = drivers.filter( d => { 
        return d.substring(0, s.length) === s;
    })
    return matching_letter
}

function matchName(drivers, s) { 
    let matching_name = drivers.filter( d => { 
       return d.name === s; 
    })
    return matching_name; 
}