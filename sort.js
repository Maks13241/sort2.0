let numArr = []
for(let i = 0 ; i < 10; i++) {
     numArr[i] = Math.round(Math.random() * 100 - 50)
}
let minusMaks = [] 
let plusMaks = [] 

for(let i = 0; i < numArr.length; i++) {
 if (numArr[i] > 0 ) {
        plusMaks.push(numArr[i])
    } else if (numArr[i] < 0) {
        minusMaks.push(numArr[i])
    }
    
}
let allNumbersInOrder = [minusMaks, plusMaks]


console.log(minusMaks, plusMaks)

