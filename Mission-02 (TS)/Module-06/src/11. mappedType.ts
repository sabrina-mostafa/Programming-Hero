
// Mapped Types

// ------------------- Simple Example to Compare -------------------
const arrNum = [1, 2, 3];
const arrStr = ["1", "2", "3"];

const arrStrFromArrNum: string[] = arrNum.map((num) => num.toString());
console.log(arrNum, arrStr, arrStrFromArrNum);


// ----------- Mapped Types -----------
type AreaNum = {
    height: number;
    width: number;
}
type AreaStr = {
    height: string;
    width: string;
}

type AreaWithNum = {
    [key in keyof AreaNum]: number;
} 
type AreaWithStr = {
    [key in keyof AreaStr]: string;
} 

type AreaWithGeneric1 <T> = {
    [key in keyof T]: number;
} 

// const area1: AreaWithGeneric<{height: number; width: number}> = {
const area1: AreaWithGeneric1<AreaNum> = {
    height: 20,
    width: 20
}

type AreaWithGeneric2<T> = {
    [key in keyof T]: T[key];   // T[key] >>> T["height"] >>> string, when key==height
}

const area2: AreaWithGeneric2<{ height: string; width: number }> = {
    height: "50",
    width: 80
}
const area3: AreaWithGeneric2<{ height: number; width: boolean }> = {
    height: 50,
    width: true
}

console.log(area1, area2, area3);