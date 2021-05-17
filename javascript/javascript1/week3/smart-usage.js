const activities = [];
const usageLimit = 50;
const date1 = new Date();
const date2 = new Date(Date.UTC(2021, 5, 16, 3, 0, 0));

function addActivity(date, activity, duration) {
    const stringDate = date.toLocaleDateString('en-US');
    const newActivity = { date: stringDate, activity: activity, duration: duration };
    activities.push(newActivity);
}
// adding some activities
addActivity(date1, "Youtube", 30);
addActivity(date1, "Facebook", 20);
addActivity(date1, "Google", 15);
addActivity(date2, "Facebook", 32);
addActivity(date2, "Google", 7);

//showing status for specific Date
function showStatus(date) {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }
    let totalSum = 0;
    let todaySum = 0;
    let todayCount = 0;
    for (let activity of activities) {
        totalSum += activity.duration;

        if (activity.date === date.toLocaleDateString('en-US')) {
            todaySum += activity.duration;
            todayCount++;
        }
    }

    console.log(`You have added ${activities.length} activities. They amount to ${totalSum} min of usage`);
    console.log(`Today you have ${todayCount} activities. They amount to ${todaySum} min of usage`);

    if (todaySum >= usageLimit) {
        console.log("You have reached your limit today, no more smartphoning for you!");
    }
}

showStatus(new Date());

//showing total time spent on specific activity
function showTotalTimeOf(activityName) {
    let sum = 0;
    for (let element of activities) {
        if (element.activity === activityName)
            sum += element.duration;
    }

    console.log(`You have spent ${sum} minutes in total on ${activityName}.`);

}

showTotalTimeOf("Youtube");


//showing activity spent time on the most 
function showMostOften() {
    let summary = {};

    for (let element of activities) {
        if (!summary.hasOwnProperty(element.activity)) {
            summary[element.activity] = 0;
        }
        summary[element.activity] = summary[element.activity] + element.duration;
    }
    console.log(summary);

    const max = Object.keys(summary).reduce(function (a, b) { return summary[a] > summary[b] ? a : b });

    console.log(`You have spent the most time on ${max}. ${summary[max]} min of usage`);
}

showMostOften()