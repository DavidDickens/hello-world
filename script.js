let userName = prompt("What do I call you?");
console.log(userName);

document.write("Welcome, " + userName + "Play me if you dare!");

let doYouPlay = prompt("Do you want to play Chess? Type yes or no")
console.log(doYouPlay)

if(doYouPlay == 'yes'){
    document.write("Click the link at the top to play!");
    } else if (doYouPlay == 'no'){
    document.write("I understand thinking is HARD...")
}else { 
    document.write("Hmm I'm not smart enough to know what you typed... How the turn tables")
}

