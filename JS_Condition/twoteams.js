const ateam_1 = 96;
const ateam_2 = 108;
const ateam_3 = 89;
const bteam_1 = 88;
const bteam_2 = 91;
const bteam_3 = 110;

let ateamavg = (ateam_1 + ateam_2 + ateam_3) / 3;
console.log("a team avg : " + ateamavg);
let bteamavg = (bteam_1 + bteam_2 + bteam_3) / 3;
console.log("b team avg : " + bteamavg);

if (ateamavg <= 100 && bteamavg <= 100) {
  console.log("No winner");
} 
  else if (ateamavg > bteamavg) {
    console.log(" a team is winner with score of: " + ateamavg);
  } else if (ateamavg < bteamavg) {
    console.log("b team is winner with score of: " + bteamavg);
  } else if (ateamavg === bteamavg) {
    console.log("Tie");
  }

