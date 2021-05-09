const class07Students = [];
function addStudentToClass(studentName) {
    
    if (class07Students.length === 6 && studentName !== "Queen Margrethe II") {
        console.log("Cannot add more students to class 07");
        return;
    } else if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return;
    } else if (!studentName) {
        console.log("You cannot add an empty string to a class");
        return;
    }

    class07Students.push(studentName);
}

addStudentToClass("Ben");//Add some students to the class.
addStudentToClass("Anna");
addStudentToClass("Marg");
addStudentToClass("Alise");
addStudentToClass("Anna"); //Add a student that is already in the class
addStudentToClass("Serg");
addStudentToClass("Julio");
addStudentToClass(""); //Add empty string
addStudentToClass("Kev"); //Add more students than there is space for
addStudentToClass("Queen Margrethe II"); //Add the Queen to a full class

console.log(class07Students);

function getNumberOfStudents() {
    console.log(`Class 07 has ${class07Students.length} students`);
}
getNumberOfStudents();