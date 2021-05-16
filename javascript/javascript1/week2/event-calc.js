function getEventWeekday (numberOfDays) {
    const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const today = new Date();
    const eventDayOfWeek = (today.getDay() + numberOfDays) % 7;

    return weekDays[eventDayOfWeek];
}


// With todays weekday a Tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"