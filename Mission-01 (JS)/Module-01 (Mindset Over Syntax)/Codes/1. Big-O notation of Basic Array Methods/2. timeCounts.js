const array1 = [];
const array2 = [];

for (let i = 0; i < 60000; i++) {
  if (i < 30000) {
    array1.push(i);
  }

  array2.push(i);
}

console.log(array1.length);
console.log(array2.length);


console.time("map1");
const firstUserList = array1.map((number) => ({userId: number}));
console.timeEnd("map1");

console.time("map2");
const secondUserList = array2.map((number) => ({userId: number}));
console.timeEnd("map2");


console.time("find");
const user = secondUserList.find((user) => (user.userId == 59000));
console.timeEnd("find");

console.time("constantTime");
const specificUser = secondUserList[59000];
// const specificUser = secondUserList[500];
console.timeEnd("constantTime");