function howdy(yourFirstName) {
    alert("Howdy " + yourFirstName);
}

function changeValue() {
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement);
    selectedElement.innerText = "DIGS";
    selectedElement.style.display = "none";
}

function conditional() {
    alert("use inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
}

function evalNumber() {
    var inputValue = parseInt(prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue) || inputValue > 99999 || inputValue < 10000 || !(Number.isInteger(inputValue))) {
        alert(inputValue + " is not a valid 5-digit number.")
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}

function scopeValue() {
    if (0 == 0) {
        var x = 0;
        var y = 1;
        var z = x;
    } else {
        alert("Why is 0 not 0?");
    };
    alert("Use Inspect to use the console and inspect the code")
    console.log("Check the sources to see this code and study the declarations")
    console.log("Value of x as originally declared: " + x);
    console.log("Value of y as originally declared: " + y);
    var x = x + 2;
    console.log("Value of x +1: " + x);
    console.log("Value of z: " + z + " does not change.");
}

function getMinutes() {
    var currentMinute = Date().getMinutes();
    alert("The minutes at this moment are " + currentMinute)
}

function addElements() {
    var valueArray = ['first', 'second', 'thrid'];
    for (i in valueArray) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div ' + i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];
    }
}

function parseArray(array) {
    var newFruit = prompt("enter a fruit"); //prompt asks for input
    array.push(newFruit); //.push method adds a value to an array
    var x = array.sort(); //.sort method sorts values in an array
    var y = x.length; //.length method accesses the length of an array
    console.log(x[y - 1]); //log the last item in the array
    console.log(array); //log the entire array
}
//var newArray = ["papaya", "apple", "orange", "banana"];