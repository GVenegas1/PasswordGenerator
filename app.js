const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let PasswordLength = 12

function randomCharaters(){
    let word = Math.floor(Math.random() * characters.length)
    return characters[word]
}

function Password(){
    let randomPassword = ""
    for(let i = 0; i< PasswordLength; i++ ){
        randomPassword += randomCharaters()
        
    }
    return randomPassword
}
const generatedPasswordOne = Password()

console.log("Here is a random password: ", generatedPasswordOne)


