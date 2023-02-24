function yourName(){
    let userName = prompt("What do I call you?");
    console.log(userName);
    document.write("Welcome, " + userName + "Play me if you dare!"); 
    return userName;  
}


function playChess(){
    let doYouPlay = prompt("Do you want to play me in a game of Chess?");
  
    if (doYouPlay == 'yes'){
       document.write("Good Answer!! Click the link at the top to play!");
    } else {
        document.write("Wrong answer but I understand thinking is HARD...");
      playChess();
   }
}

function myQuestion(){
    let howGood = parseInt(prompt("On a scale 1-10 how good are you at Chess?"));
    console.log (howGood);

    let output = "";

    if (howGood <= 10){
    alert("Nice!");
    console.log("rating of " + howGood + "stars!");

   
    for (let i = 0; i < howGood; i++){
    output += '<img src="https://images.unsplash.com/photo-1481015172496-8cfcb0d85e59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="50" height="50" />';
}
}
    document.write(output);
}

yourName();
playChess();
myQuestion();