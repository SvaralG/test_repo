let accountbalance = 100
let sms = "A001DFX0"
let postomat = new Array (0, 0, 0 , "A001DFX0", 0)
let cellNumber = 4
let index = postomat.indexOf(sms)

if(postomat[index] == sms) {
    accountbalance = accountbalance - 100
    console.log(`you got mailbox from ${cellNumber} cell number, your account balace ${accountbalance}`);

} else {
    console.log (`your code isnt correct`);
}
