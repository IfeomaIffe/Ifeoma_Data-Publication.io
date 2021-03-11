//define parent element
var link = "https://ochre.lib.uchicago.edu/ochre?uuid=83739c7a-b4ce-47c7-b723-b5ccc7da71a2";
var textList = [];

//first function, called on <body>
function loadXML() {
    //chain the next function to create the XHR
    XMLrequest(link);
    console.log('loadXML -- ok');
};


function XMLrequest(link) {
    //make the API call and send the results to the next function
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            XMLResponse = this.responseXML;
            listTexts(this.responseXML);
        };
    };
    connect.open('GET', link, true);
    connect.send();
    console.log('XML request -- ok');
}

function listTexts(sourceXML) {
    //select, parse, and display the data
    var textList = sourceXML.getElementsByTagName('text');
    var linkList = sourceXML.getElementsByTagName('links');
    console.log(linkList);

    for (i = 0; i < textList.length; i++) {
        //create one row per text
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'ochreTableRows');
        tr.setAttribute('id', 'row_' + i);
        document.getElementById('ochreTableBody').appendChild(tr);
        //populate the cells in the row
        //new column name
        var td = document.createElement('td');
        td.setAttribute('id', 'td_name_' + i);
        //create new div
        var newDiv = document.createElement('div');
        newDiv.addEventListener('click', showImage.bind(this, i, linkList));
        newDiv.textContent = textList[i].children[0].children[0].innerHTML;
        td.appendChild(newDiv);
        //new column description
        document.getElementById('row_' + i).appendChild(td);
        var td2 = document.createElement('td');
        td2.setAttribute('id', 'td_desc_' + i);
        td2.textContent = textList[i].children[3].innerHTML;
        document.getElementById('row_' + i).appendChild(td2);
        var td3 = document.createElement('td');
        td3.className = 'Description';
        var textDescription = textList[i].childNodes[3].innerHTML;
        td3.textContent = textDescription;
        document.getElementById('row_' + i).appendChild(td3);
    }
}

function showImage(i, linkList) {
    var array = [];
    for (j = 0; j < linkList[i].children.length; j++) {
        var resource = linkList[i].children[j].outerHTML;
        var parResource = new window.DOMParser().parseFromString(resource, "text/xml");
        var uuid = parResource.getElementsByTagName('resource')[0].attributes[1].nodeValue;
        //console.log(uuid);
        var url = "https://ochre.lib.uchicago.edu/ochre?uuid=" + uuid + "&preview";
        console.log(url);
        array.push(url);
    }
    var display = document.getElementById("image display");
    for (j = 0; j < array.length; j++) {
        var img = document.createElement('img');
        img.setAttribute('src', array[j]);
        display.appendChild(img);
    }
}