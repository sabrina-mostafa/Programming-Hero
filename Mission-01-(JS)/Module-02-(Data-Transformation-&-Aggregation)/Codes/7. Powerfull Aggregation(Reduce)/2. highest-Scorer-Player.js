// Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestPlayer = players.reduce((highScorer, currentPlayer) => {
  if (highScorer.score > currentPlayer.score) {
    return highScorer;
  } 
  else return currentPlayer;
  
}, players[0]);

console.log("Hight Scorer Player is: ", bestPlayer);
