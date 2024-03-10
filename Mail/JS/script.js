// selezionare il bottone cerca
const searchBtn = document.querySelector (`#search-button`);
searchBtn.addEventListener (`click`, function(){
    // al click del bottone cerca:
    // mettere il contenuto del campo in una variabile
    const userMail = document.querySelector(`#input-mail`).value;
    console.log(userMail)
    // creare array mail autorizzate
    const validMails = [`battiato@gmail.com`, `guccini@gmail.com`,`deAndre@gmail.com`,`dalla@gmail.com`,`giunirusso@gmail.com`,`alice@gmail.com`, `battisti@gmail.com`, `finardi@gmail.com`, `graziani@gmail.com`, `degregori@gmail.com` ]
    // controllare se mail inserita è in array mail autorizzate
    let mailFound = false
    for(let i = 0; i < validMails.length; i++){
        // scorro l array
        thisMail = validMails[i]
        // se imput utente corrisponde a mailFound diventa vero
        if(thisMail === userMail) {
            mailFound = true;
    }}

    // alla fine del ciclo se la mail utente è uguale a una della lista, stampo un messaggio altrimenti un altro
    let userMessage
    if(mailFound === true){
        userMessage = `la sua mail è registrata, può effettuare l'accesso`
    } else {
        userMessage = `accesso negato, la mail non è registrata nell'elenco `
    }
     
    const messageDisplay = document.querySelector(`#user-message`)
    messageDisplay.innerHTML += userMessage 

}
)
