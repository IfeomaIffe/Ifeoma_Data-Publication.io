//Define parent element
var parentElement = document.getElementById('ochreTableBody');

//Define API URL
var url = "http://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";

//First function, called on <body>
function loadXML() {
    //Chain the next function to create the XHR
    XMLrequest(url);
    console.log('loadXML --ok');
};

function XMLrequest(link) {
    //Make the API call and send results to the next function
    //XHR request
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function name() {
        if (this.readyState == 4 && this.status == 200) {
            listTexts(this.responseXML);
        }; //check status 
    };
    connect.open('GET', link, true);
    connect.send();
    console.log('XML request --ok');
}

function list(sourceXML) {
    document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
}

function listTexts(sourceXML) {
    document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[0].children[1].innerHTML;
    document.getElementById('setTitle').innerText = sourceXML.getElementsByTagName('set')[0].children[3].children[0].innerHTML;

    document.getElementById('setDescription').innerText = sourq.getElementsByTagName('set')[0].children[4].innerHTML;
    var liscenseText = document.getElementById('license');
    liscenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
    liscenseText.setAttribute('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);

    //Select, parse, and display the data
    console.log(sourceXML);
    var textList = sourceXML.getElementsByTagName('text');
    for (i = 0; i < textList.length; i++) {
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'ochreTableRows')
        tr.setAttribute('id', 'row_' + i);
        document.getElementById('ochreTableBody').appendChild(tr);
        //populate the cells in the row
        var td = document.createElement('td');
        td.setAttribute('id', 'td_name' + i);
        td.textContent = textList[i].children[0].chilrdren[0].innerHTML;
        document.getElementById('row_' + i).appendChild(td);
        var td2 = document.createElement('td');
        td2.setAttribute('id', 'td_desc' + i);
        td2.textContent = textList[i].children[3].innerHTML;
        document.getElementById('row_' + i).appendChild(td2);
    };
}