const findTheOldest = function(people) {
    let oldest = 0;
    for (person in people) {
        let yearBorn = people[person].yearOfBirth;
        let yearDeath = people[person].yearOfDeath;
        let age = findAge(yearBorn, yearDeath);
        if (age > oldest) {
            oldest = age;
        }
        
    }
    
    return oldest;
};

function findAge(yearBorn, yearNow) {
    return yearNow - yearBorn;
}

// Do not edit below this line
module.exports = findTheOldest;
