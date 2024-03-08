// generare numero random per utente da 1 a 6
const UserNumber = Math.floor(Math.random() * 6) + 1;
// generare numero random per pc da 1 a 6 
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(`User tira: ` + UserNumber);
console.log(`CPU tira: ` + cpuNumber);

// verificare quale numero è più grande e se vince utente o pc
let userMessage;
if(UserNumber > cpuNumber){
    userMessage = `Complimenti hai vinto!!`
} else if (UserNumber < cpuNumber){
    userMessage = `Hai perso CPU vince`
}else if(UserNumber === cpuNumber){
    userMessage = `Pareggio`
};

console.log(userMessage);