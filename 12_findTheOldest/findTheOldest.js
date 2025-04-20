const findTheOldest = function(people) {
    people.forEach(person => {
        if (person.yearOfDeath===undefined){
            const d = new Date();
            person.yearOfDeath = d.getFullYear();
        }
    });

    return people.reduce((currentOldest, currentPerson) => {
        if (currentOldest.yearOfDeath - currentOldest.yearOfBirth < currentPerson.yearOfDeath - currentPerson.yearOfBirth ){
            return currentPerson;
        }
        return currentOldest;
    }, people[0]);
};
// Do not edit below this line
module.exports = findTheOldest;
