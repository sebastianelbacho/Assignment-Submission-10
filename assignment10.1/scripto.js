var names = window.prompt("Type Yourname here please...")  // the prompt is waiting for a name
while (names == "") {                                       // loop while checking the condition (name)
    names = window.prompt("Type Yourname here please...")  // the prompt asking for the name
}

alert("Thank You".toUpperCase())   //the prompt show you the answer




window.setTimeout(function () {                                       //function countion the time, after 20 sec, show you the alert
    alert("You are here 20 seconds already, too long!".toUpperCase())
}, 20000)




var Instruments = ["Guitars", "Drums", "Piano"]   // the array's content
var Content = "";                                  // 
var Y;                                             // i think its called a counter ...

function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {    //the array's content start from 0 
        Content += Instruments[Y] + "<br>";       //
    }
    document.getElementById("ListOfInstruments").innerHTML = Content;
}


let person = {              //object
    name: "Seba ",
    age: "30 ",
    do: "learning javaScript ",
    description: function () {
        return "This is " + this.name + "he has " + this.age + "and he is " + this.do + "right now."
    }

};

document.getElementById("personObject").innerHTML = person.description();
