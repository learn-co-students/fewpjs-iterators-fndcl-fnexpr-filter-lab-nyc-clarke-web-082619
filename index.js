// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(n => n.toUpperCase() === str.toUpperCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(n => n.startsWith(str));
}

function matchName(drivers, str) {
    return drivers.filter(n => n.name === str)
}


