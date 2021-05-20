const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesTime() {
  const lifeInMin = 80 * 365 * 24 * 60;
  const durationInMin = [];
  let sumInMin = 0;

  // calculates duration of all series in minutes and puts it in new array durationInMin
  // also sums up all series duration in variable sumInMin
  for (let i = 0; i < seriesDurations.length; i++) {
    durationInMin.push(seriesDurations[i].days * 24 * 60
      + seriesDurations[i].hours * 60 + seriesDurations[i].minutes);
    sumInMin += durationInMin[i];
  }

  // calculates % and goes through 2 arrays loging out name of series and % of life    
  for (let i = 0; i < seriesDurations.length; i++) {
    const percent = (durationInMin[i] / lifeInMin * 100).toFixed(3);
    console.log(`${seriesDurations[i].title} took ${percent}% of my life`);
  };

  // loging out sum of series duration  
  const sumPercent = (sumInMin / lifeInMin * 100).toFixed(2);
  console.log(`\nIn total that is ${sumPercent}% of my life`);
}

logOutSeriesTime();