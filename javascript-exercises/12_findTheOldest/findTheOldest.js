const ageCalculator = function (yearOfBirth, yearOfDeath) {
    let age = 0;
    //handles death year not provided to calculate age
    if (arguments.length === 1) {
        const currentYear = new Date().getFullYear();
        age = currentYear - yearOfBirth;
    } else {
        age = yearOfDeath - yearOfBirth;
    }
    return age;
};

const findTheOldest = function (people) {
    //create empty oldest person object for comparison purpose
    let oldestPerson = {
        age: 0
    };
    for (person of people) {
        let birthYear = person.yearOfBirth;
        let deathYear = person.yearOfDeath;
        if (deathYear == undefined) {
            person.age = ageCalculator(birthYear);
        } else {
            person.age = ageCalculator(person.yearOfBirth, person.yearOfDeath);
        }
        if (person.age > oldestPerson.age) oldestPerson = person;
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
