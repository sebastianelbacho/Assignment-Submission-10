// var webPeg = window.prompt("You are on one of mine assignments, type in Your name to continue");

// while(webPeg == "") {
//     webPeg = window.prompt("You are on one of mine assignments, type in your name to continue");

//    while( webPeg == "") {
//    webPeg = window.prompt("Thank You! Now you can see the full picture.");

// }

// }

let text = "";
let i = 0;
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}

document.getElementById("demo").innerHTML = text;
