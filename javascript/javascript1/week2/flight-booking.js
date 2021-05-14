function getFullname(firstname, surname, useFormalName, sex) {

    if (!firstname || !surname) {
        return "Please specify your full name!";
    }

    if (useFormalName) {
        if (sex === "male") {
            return "Lord " + firstname + " " + surname;
        } else if (sex === "female") {
            return "Lady " + firstname + " " + surname;
        } else {
            return "Lord or Lady " + firstname + " " + surname;
        }
    }
    
    return firstname + " " + surname;
}

const fullname1 = getFullname("Benjamin", "Hughes", true, 'male');
const fullname2 = getFullname("Alison", "Darwin", true, 'female');
const fullname3 = getFullname("Hugh", "Jackson");
const fullname4 = getFullname("Mary", "Domner", false);
const fullname5 = getFullname("Casper", "Trull", 'true', 'not a man');
const fullname6 = getFullname("Kevin", "Keels", true);
const fullname7 = getFullname("", "", true);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);
console.log(fullname7);

