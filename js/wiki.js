//Configure your html page
//configure input#searchTerm on the HTML page for input
//configure div#wiki on the HTML page for output
//configure a button to invoke this function()
//load this JS file using <script>
function wikiAPI() {

    //define your variables
    //create an XHR object
    //define base URL for API and insert searchTerm variable
    var parentDiv = document.getElementById('wiki');
    removeResults(parentDiv);
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    //Open the API call
    //use XHR.open to GET a file from the API
    connect.open('GET', url);

    //Define the API request to the server
    //load and parse the response as a JSON data object
    //console.log the data object to see what you got as a reponse
    //locate the branch of the object that is of interest
    //loop through the branch and ouput the wiki pages to the HTML page
    connect.onload = function() {
        var wikiObj = JSON.parse(this.response);
        // console.log(wikiObj);
        // console.log(wikiObj.query.pages);
        var pages = wikiObj.query.pages;
        for (var i in pages) {
            /*var newDiv = document.createElement("div"); 
            newDiv.setAttribute('class', 'row h4'); //methods
            DocumentFragment.getElementById("wiki").appendChild(newDiv);
            newDiv.innerText = pages[i].title; */



            //Send API request to the server
            //connect.send();

            //Super Challenge
            //Display links to the Wiki HTMl pages as results
            //Use the pageId property in the JSON file
            //The base URL for loading Wiki pages by pageid is the
            //https: //en.wikipedia.org/?curid=PAGEID_GOES_HERE
            //add the pageId to the end of the URL

            var pageURL = "https://en.wikipedia.org/?curid="
            var newAnchor = document.createElement("a");
            newAnchor.href = pageURL + page[i].pageid; //setAttribute('href'), pageURL+page[i]
            newAnchor.className = 'd-block'; //setAttribute('class','d-block');//properties
            newAnchor.innerText = page[i].title;
            document.getElementById("wiki").appendChild(newAnchor);
        };

    }
    connect.send();
}