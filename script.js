function yourName(){
    let userName = prompt("What do I call you?");
    console.log(userName);
    document.write("Welcome, " + userName + "Play me if you dare!"); 
    return userName;  
}


function playChess(){
    let doYouPlay = prompt("Do you want to play me in a game of Chess?");
  
    if (doYouPlay == 'yes'){
        console.log("Good Answer!! Click the link at the top to play!");
    } else {
        console.log("Wrong answer but I understand thinking is HARD...");
      playChess();
   }
}

playChess();
   