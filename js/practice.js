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
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number")
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