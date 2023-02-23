
function yourName(){
    let userName = prompt("What do I call you?");
    console.log(userName);
    document.write("Welcome, " + userName + "Play me if you dare!"); 
    return userName;  
}

function playChess(){
let doYouPlay = prompt("Do you want to play me in a game of Chess?")
console.log(doYouPlay)

if(doYouPlay == 'yes'){
    console.log("Good Answer!! Click the link at the top to play!");
} else {
    console.log("Wrong answer but I understand thinking is HARD...");
    doYouPlay = prompt("Do you want to play me in a game of Chess?");
    if (doYouPlay == 'yes'){
        console.log("Good Answer!! Click the link at the top to play!")
    }
}
//} else if (doYouPlay == 'no'){
 //   document.write("")
//}else { 
   // document.write("Hmm I'm not smart enough to know what you typed... How the turn tables")
//}
//}


