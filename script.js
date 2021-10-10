//Prerequsite Data
var addBtn = document.getElementById('add-task-btn');

var Sno = 0;
//create date instance
var date = new Date();
var month = date.getMonth();
var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// var dayArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var date = date.getDate();

//  date instance end----

addBtn.addEventListener('click', function () {

    if (document.getElementById('write-task').value == '') {
        alert('Kindly Enter The Task First');
    } else {

        Sno = Sno + 1;
        var taskStr = document.getElementById('write-task').value;
        var finalDate = `${monthArr[month]},${date}`;
        var table = document.getElementById('table');

        var tableRow = table.insertRow();


        // td of Sno
        var tdSno = document.createElement('td');
        var tdSnoData = document.createTextNode(Sno);
        tdSno.appendChild(tdSnoData);
        tableRow.appendChild(tdSno);

        //td of task
        var tdTask = document.createElement('td');
        var tdTaskData = document.createTextNode(taskStr);
        tdTask.appendChild(tdTaskData);
        tableRow.appendChild(tdTask);

        //td of date
        var tdDate = document.createElement('td');
        var tdDateData = document.createTextNode(finalDate);
        tdDate.appendChild(tdDateData);
        tableRow.appendChild(tdDate);

        //td of actions
        //edit icon code
        var spanEdit = document.createElement('span');
        var spanEditData = document.createTextNode('');
        spanEdit.appendChild(spanEditData);
        spanEdit.className = "fa fa-lg fa-pencil-square"
        spanEdit.setAttribute('onclick', 'edit(this)');
        //delete icon code
        var spanDelete = document.createElement('span');
        var spanDeleteData = document.createTextNode('');
        spanDelete.appendChild(spanDeleteData);
        spanDelete.className = "fa fa-lg fa-window-close"
        spanDelete.setAttribute('onclick', 'del(this)');
        //td of actions final append
        var tdAction = document.createElement('td');
        tdAction.appendChild(spanEdit) + tdAction.appendChild(spanDelete);
        tableRow.appendChild(tdAction);

        //remove data from textbox:
        document.getElementById('write-task').value = '';
        isNeedClear();
    }



});

//function to edit the task
function edit(x) {
    var getNodeToEdit = x.parentNode.parentNode;
    var finalNodeToEdit = getNodeToEdit.childNodes[1];

    //creating edit input box
    var inputTag = document.createElement('input');
    inputTag.setAttribute('type', 'text');
    inputTag.className = 'edit-input';
    inputTag.value = finalNodeToEdit.innerHTML;
    finalNodeToEdit.appendChild(inputTag);
    finalNodeToEdit.firstChild.remove();

    //creating save icon
    var saveIcon = document.createElement('span');
    saveIcon.setAttribute('class', 'fa fa-plus-square save-icon');
    saveIcon.setAttribute('onclick', 'saveEdit(this)');
    finalNodeToEdit.appendChild(saveIcon);

}

//function to set edited task
function saveEdit(x) {
    var GetEditedNode = x.previousSibling;
    var getNodeValue = GetEditedNode.value;
    x.previousSibling.remove();
    x.parentNode.innerHTML = getNodeValue;
}

//function to check need of clear all btn and create btn if needed
function isNeedClear() {
    var getRows = table.childNodes[1].getElementsByTagName('tr');
    if (getRows.length == 3) {
        // console.log('need a clear all btn');
        var childContainer = document.getElementById('child-container');
        var clearAllBtn = document.createElement('button');
        var clearAllBtnText = document.createTextNode('Clear All');
        clearAllBtn.appendChild(clearAllBtnText);
        clearAllBtn.setAttribute('class', 'get-task-btn');
        clearAllBtn.setAttribute('id', 'clear-all-btn');
        clearAllBtn.setAttribute('style', 'border-radius: 5px;padding:7px;');
        clearAllBtn.setAttribute('onclick', 'clearAllTasks()');
        childContainer.appendChild(clearAllBtn);

    }

}

// function removeIsNeedClearBtn(){


// }

//function to remove all tasks at once
function clearAllTasks() {
    // var childNodeCount = 2;
    var totalLength = (table.childNodes[1].childElementCount);
    // console.log(totalLength);
    for (var i = 0; i <= totalLength; i++) {
        var ifSiblings = table.childNodes[1].childNodes[1].nextSibling;
        // ifSiblings.remove();
        if (ifSiblings == '#text' || ifSiblings == '') {
            console.log('yahi haaa');
        }

    }


    // var elementToCheck = table.childNodes[1].childNodes[childNodeCount].nextSibling;
    //   console.log(loopLength.nodeName);
    //  if(loopLength == '#text'){
    //     console.log('yahi haaa');
    //  }

    // document.getElementById('clear-all-btn').remove();

}

//function to remove the row
function del(x) {
    var getNodeToDel = x.parentNode.parentNode;
    getNodeToDel.remove();

}