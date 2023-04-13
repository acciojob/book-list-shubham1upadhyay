(function setup() {
    "use strict";
    
    var titleElem = document.getElementById("title");
    var authorElem = document.getElementById("author");
    var isbnElem = document.getElementById("isbn");
    var tableElem = document.getElementById("book-list");

 document.getElementById("save").addEventListener("click", function () {
        var newRow = tableElem.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newText = 
document.createTextNode(titleElem.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(1);
        newText  = 
document.createTextNode(authorElem.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(2);
        newText  = 			
document.createTextNode(isbnElem.value);
        newCell.appendChild(newText);
        titleElem.value = "";
        authorElem.value = "";
        isbn.value = "";
        tableElem.value = "";
    });
})();			

			