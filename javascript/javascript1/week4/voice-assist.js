// list all accepted comands in object
const acceptedCommands = {
    logMyName: "what is my name",
    logToDo: "what is on my todo",
    logDate: "what day is it today",
    resetUser: "reset user", // adding one more command
    hello: "hello my name is ",
    addToDo: "add ",
    removeToDo: "remove ",
    calc: "what is ",
    timer: "set a timer for "
}
// global variables to hold user name, and todos
let myName = "";
let toDos = [];

function getReply(command) {
    // make command case insensetive, and exclude excess spaces and ? signs in the end
    let com = command.toLowerCase().trim();
    com = com.replace(/\?*$/, '');

    // first deal with full command string found in accepted commands
    if (Object.values(acceptedCommands).includes(com)) {
        switch(com) {
            case acceptedCommands.logMyName:
                return myName ? `Your name is ${myName}` : "You did not introduce yourself yet!";
            case acceptedCommands.logToDo:
                return toDos.length ? `Here's list of your ToDos:\n - ${toDos.join("\n - ")}` : "You have nothing on the list";
            case acceptedCommands.logDate:
                return new Date().toDateString();
            case acceptedCommands.resetUser:
                myName = "";
                toDos = [];
                return "Hello what is your name?"
        }
    // next deal with name saving
    } else if (com.startsWith(acceptedCommands.hello)) {
        // checking if name already given
        myName = myName ? 
        `You already said your name is ${myName}` 
        //works for name with few words with spaces, first I substring and capitalize Name again
        : com.substring(acceptedCommands.hello.length).split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");        
        return `Nice to meet you ${myName}`
        
        // deal with toDos
        // parse comand string assuming all comands will end with "to/from my todo"
    } else if (com.startsWith(acceptedCommands.addToDo)) {
        const todo = com.replace("add ", "").replace(" to my todo", "");
        toDos.push(todo)
        return  `Ok. ${todo} added to your todo`;
    } else if (com.startsWith(acceptedCommands.removeToDo)) {
        const todo = com.replace("remove ", "").replace(" from my todo", "");
        const removed = toDos.filter(td => td === todo);
        return removed.length ? `Done. ${removed[0]} was removed from todo` : `Didn't find ${todo} in your todo.`
        
        // calc and timer moved to another function for better readability
    } else if (com.startsWith(acceptedCommands.calc)) { // there other commands that start with "What is..." but they were dealed with before so only calc left
      return getCalcResult(com.replace(acceptedCommands.calc, ""));  
    } else if (com.startsWith(acceptedCommands.timer)) {
        return startTimer(com.replace(acceptedCommands.timer, ""))
    } else {
        return "Sorry. I don`t know what you mean";
    }

}

function getCalcResult(expresion) {
    // assuming numbers and signs always have to be seaprated with whitespace
    // and we only have simple 1 operation and 2 numbers meaning it will always be an array of 3 elements
    const expresionArray = expresion.split(" ");
    const errorMsg = "Cannot calculate that";
    if (expresionArray.length != 3) return errorMsg;
    
    const a = Number(expresionArray[0]);
    const b = Number(expresionArray[2]);
    const sign = expresionArray[1];
    
    switch(sign) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return errorMsg;
    }
}

function startTimer(time) {
    //assuming we can set minutes or seconds
    const timeArray = time.split(" ");
    const errorMsg = "Wrong timer format. Should be: [Number] [minutes/seconds]"; 
    if (timeArray.length != 2) return errorMsg;

    let interval = 0;
    // since min and seconds can be singular or plural i use .startsWith()
    if (timeArray[1].startsWith("minut")) {
        interval = Number(timeArray[0]) * 60 * 1000;
    } else if (timeArray[1].startsWith("second")) {
        interval = Number(timeArray[0]) * 1000;
    } else {
        return errorMsg;
    }

    console.log(`Timer set for ${time}`);
    setTimeout(() => console.log("Timer done"), interval);
    return "...";
}


//testing
console.log(getReply("Hello my name is Benjamin Button")); 
console.log(getReply("What is my name??")); 
console.log(getReply("what day is it today?")); 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo")); 
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my toDo"));
console.log(getReply("Remove swiming from my todo"));
console.log(getReply("what is 8 * 5"));
console.log(getReply("What is 4 + 4"));
console.log(getReply("Set a timer for 10 seconds")); 