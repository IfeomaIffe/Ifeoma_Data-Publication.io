function search() {
//declare variable from user input
var artistInput = document.getElementById('artistInput').value;
//var albumInput = document.getElementById('albumInput').value;


//declare base url for API
var url = "https://theaudiodb.com/api/v1/json/1/discography.php?s=" + artistInput;

//declare destination for album art
//var albumDiv = document.getElementById('albumArt');

//fetch command and check for bad response
fetch(url)
.then (
    function(response) {
        if (response.status !== 200) {
            console.log('Problem status code is: ' + response.status);
            return;
        }
        //save the respose to a variable
        //grab album art URL
        response.json().then(function(data) {
            console.log(data);
            let jsonContent = data.album;
            console.log(jsonContent);
            for (i in jsonContent) {
                var discographyDiv = document.getElementById('discography');
                var albumYearDiv = document.createElement('span');
                albumYearDiv.setAttribute('class', 'h5');
                albumYearDiv.innerText = jsonContent[i].intYearReleased;
                var albumNameDiv = document.createElement('span');
                albumNameDiv.setAttribute('class', 'h5');
                albumNameDiv.innerText = jsonContent[i].strAlbum;
                discographyDiv.appendChild(albumYearDiv);
                discographyDiv.appendChild(albumNameDiv);
            }
        });
    });

}


//super challenge
//use for loop

//use this base to return all track names
//iterate through them all and display
//https://www.theaudiodb.com/api/v1/json/{APIKEY}/track.php?m=2115888

