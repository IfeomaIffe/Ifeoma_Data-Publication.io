function search() {
    //declare variable from user input
    var artistInput = document.getElementById('artistInput').value;


    //declare base url for API
    var url = "https://theaudiodb.com/api/v1/json/1/discography.php?s=" + artistInput;

    fetch(url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Problem status code is: ' + response.status);
                    return;
                }
                //save the respose to a variable
                //grab album art URL
                response.json().then(function(data) {
                    let jsonContent = data.album;
                    console.log(jsonContent);
                    for (i in jsonContent) {
                        var discographyDiv = document.getElementById('discography');
                        var newRow = document.createElement('div');
                        newRow.setAttribute('class', 'row');
                        newRow.setAttribute('id', 'newRow_' + i);
                        discographyDiv.appendChild(newRow);
                        var newYearCol = document.createElement('div');
                        newYearCol.setAttribute('class', 'col-sm-3');
                        newYearCol.innerText = jsonContent[i].intYearReleased;
                        newRow.appendChild(newYearCol);
                        var newAlbumCol = document.createElement('div')
                        newAlbumCol.setAttribute('class', 'col');
                        newAlbumCol.innerText = jsonContent[i].strAlbum;
                        newRow.appendChild(newAlbumCol);
                    }
                });
            });
}



//super challenge
//use for loop

//use this base to return all track names
//iterate through them all and display
//https://www.theaudiodb.com/api/v1/json/{APIKEY}/track.php?m=2115888