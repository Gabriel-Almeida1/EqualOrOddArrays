let vectorA = []
let vectorB = []
let vectorC = []

let whileVariable = true
let cont = 0
while (whileVariable) {
    let continueOrNot = parseInt(prompt("Type ENTER to start/continue or 1 to stop the program: "))
    if (continueOrNot === 1) {
        whileVariable = false
    } else {
        let numA = parseInt(prompt("Num for vector A: "))
        let numB = parseInt(prompt("Num for vector B: "))
        vectorA[cont] = numA
        vectorB[cont] = numB
        cont += 1
    }
}

let cont2 = 0
for (let i = 0; i < vectorA.length; i++) {
    for (let j = 0; j < vectorB.length; j++) {
        if (vectorA[i] === vectorB[j]) {
            vectorC[cont2] = vectorA[i]
            cont2 += 1
        } else if (vectorA[i] % 2 !== 0) {
            vectorC[cont2] = vectorB[i]
            cont2 += 1
        }
    }
}

console.log(vectorA)
console.log(vectorB)
console.log(vectorC)