// Code your solution here
function findMatching(drivers, string) {
      return drivers.filter(n => n.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(char => char.startsWith(string));
}

function matchName(drivers, string) {
    return drivers.filter(n => n.name === string);

}