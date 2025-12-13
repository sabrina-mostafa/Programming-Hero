//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }



const INTERVAL = 30 * 60 * 1000;       // 30-minute intervals (minutes into millisecond)

const getBinningTimeStamp = (data) => {
    const timeStamp = data.timestamp;
    const date = new Date(timeStamp);
    const timeInMillisecond  = date.getTime(date);

    const binningTimeStamp = Math.floor(timeInMillisecond/INTERVAL) * INTERVAL;
    // console.log(binningTimeStamp); 

    return ( new Date(binningTimeStamp).toISOString() );
}
// console.log(getBinningTimeStamp);


const binnedEvents = events.reduce((acc, eachEvent) => {

    const temp = getBinningTimeStamp(eachEvent)
    
    if(!acc[temp]) {
        acc[temp] = {total : 1} ;
    }
    else {
        acc[temp].total = acc[temp].total + 1 ;
    }

    return acc ;
}, {});


console.log("\n\nbinnedEvents: ", binnedEvents);
