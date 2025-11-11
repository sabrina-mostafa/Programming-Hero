//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }



// ------------------------ using map (Way 1: Recommended) ------------------------

const finalGroupCount1 = surveyResponses.reduce((countTable, eachResponse) => {
    
    countTable[eachResponse] = (countTable[eachResponse] || 0) + 1;
    
    return countTable;

}, {})

console.log("\nOutput1: ", finalGroupCount1);



// ------------------------ using map (Way 1) ------------------------

const obj = {};
const finalGroupCount = surveyResponses.map((response) => {
  if (response in obj) {
    obj[response] = obj[response] + 1;
  }
  else {
    obj[response] = 1;
  }
});

console.log("\nOutput2: ", obj);

