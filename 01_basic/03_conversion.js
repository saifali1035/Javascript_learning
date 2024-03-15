// -------------------------Conversion------------------------------
let score = "101"

let changeToNum = Number(score)


//console.log( typeof score)
//console.log( typeof changeToNum)

//console.log(changeToNum)





let score2 = "101abc"

let changeToNum2 = Number(score2)


//console.log( typeof score2)
//console.log( typeof changeToNum2)

//console.log(changeToNum2)   // output will be NaN as score2 is not pure Number 

//------------------Operation------------------

console.log("Saif " + "Ali" )

console.log(1 + "3");

console.log(1 + 1 + "3"); // 23

console.log("1" + 1 + 3); // 113

// reason is type conversion is done based on first entry