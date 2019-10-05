// Code your solution here

function findMatching(drivers, string){

    let filtered_drivers = drivers.filter( n => { return n.toLowerCase() === string.toLowerCase() });
    return filtered_drivers;
}


function fuzzyMatch(drivers, string){
    let filtered_drivers = drivers.filter( n => {
        return n.charAt(0).toLowerCase() === string.charAt(0).toLowerCase()
    });
    return filtered_drivers;
}

function matchName(drivers, string){
    let filtered_drivers = drivers.filter( n => {
        return n["name"] === string
    });
    return filtered_drivers;
}