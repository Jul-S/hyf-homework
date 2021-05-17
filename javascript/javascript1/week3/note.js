const notes = [];

// implementing SAVE note
function saveNote(content, id) {
    const noteObject = { content: content, id: id };
    notes.push(noteObject);
}
//check SAVE functionality
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// implementing GET note
function getNote(id) {
    //log error in case id is not a number
    if (typeof id !== 'number') {
        console.log("Error: this id is not a number!");
        return;
    }
    // loop through notes and get note by id
    for (let note of notes) {
        if (note.id === id) {
            return note;
        }
    }
    // in case id wasn`t found return this error
    console.log(`Erorr: could not find note with id ${id}`);
}
//check GET functionality
const firstNote = getNote(1);
console.log(firstNote);

//implementing LOG notes
function logOutNotesFormatted() {
    for (let note of notes) {
        console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
    }
}
//check LOG functionality
logOutNotesFormatted();

// implement CHANGE content of Note
// if  successful return true otherwise false
function changeNote(id, newContent) {
    //log error in case id is not a number
    if (typeof id !== 'number') {
        console.log("Error: this id is not a number!");
        return false;
    }
    // loop through notes and get note by id
    for (let note of notes) {
        if (note.id === id) {
            note.content = newContent;
            return true;
        }
    }
    // in case id wasn`t found return this error
    console.log(`Erorr: could not find note with id ${id}`);
    return false;
}
//check CHANGE functionality
const changed = changeNote(1, "Call Mom");
const newNote = getNote(1);
console.log("Note chaged?", changed);
console.log(newNote);