let produktList = [
    "Cola", "Sprite", "Tomato", "Onion", "Meat"
]

console.log(produktList.length)

console.log(produktList[0])
console.log(produktList[3])
console.log(produktList[produktList.length - 1])

produktList[3] = "Orange"
console.log(produktList)

//push
produktList.push("Milk", "IceCream")
console.log(produktList)
console.log(produktList.length)

console.log(produktList.pop())
console.log(produktList)

//shift //unshift

console.log(produktList.shift())
console.log(produktList)

produktList.unshift ("Pepsi-cola","Cola-zero")
console.log(produktList)

//reverse
produktList.reverse()
console.log(produktList)

produktList.reverse().pop()
console.log(produktList)

//arrays //matrix
const lemonadeVendor = [
    ["Cola-zero", "Cola-classic", "Cola-vanilla"],
    ["Sprite-classic", "Sprite-ice", "Sprite-fresh"],
    ["Fanta-classic", "Fanta-ice", "Fanta-grape"],

]
console.log(lemonadeVendor[2][2])

lemonadeVendor[2][2] = "rich juice"
console.log (lemonadeVendor)

const scoreValues = [20, 30, 45, 50, 120, 350]
let totalScores = 0 
for(let values of scoreValues) {
    totalScores += values   
}
console.log(totalScores)

const programmers = [
    {firstName: "Ivan", language: "Python", salary: 200000},
    {firstName: "Anna", language: "C++", salary: 250000},
    {firstName: "Oleg", language: "JavaScript", salary: 320000},
]

let totalSalary = 0

for(let programmer of programmers) {
    totalSalary += programmer.salary
}

console.log(totalSalary)