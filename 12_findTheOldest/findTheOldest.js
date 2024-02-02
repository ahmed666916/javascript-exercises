const findTheOldest = function(people) {
    let oldest = 0;
    let name = '';
    for (person in people) {
        let yearBorn = people[person].yearOfBirth;
        let yearDeath = people[person].yearOfDeath;
        let age = findAge(yearBorn, yearDeath);
        if (age > oldest) {
            oldest = age;
            name = people[person].name;
        }
        
    }
    
    return name;
};

function findAge(yearBorn, yearDeath) {
    if (!yearDeath) {
        yearDeath = new Date().getFullYear();
        
    }

    return yearDeath - yearBorn;
}

// Do not edit below this line
module.exports = findTheOldest;
