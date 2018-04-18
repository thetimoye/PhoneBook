// === PROFILE PAGE SCRIPT ===

function hint(){
    alert("Just click 'lOG IN' to begin");
}

function ready() {
    
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

function numberOfContact(){
    var text = "";
    var contacts = document.getElementById('no_of_contacts');
    var x = $('#contact-list tbody').children().length;
    for (i=0; i<x; i++){     
        if (x===1) {
            text = "You have "+x+" contact.";
        } else {
            text = "You have "+x+" contacts.";
        }   
    };
    contacts.innerText = text;  
}


var rIndex, table = document.getElementById("contact-list");

function addContact() {
    var rows = "";
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    rows += "<td>" + firstname + "</td><td>" + lastname + "</td><td>" + phone + "</td><td>" + email + "</td>";

    var tbody = document.querySelector("#contact-list tbody");
    var tr = document.createElement("tr");

    tr.innerHTML = rows;
    tbody.appendChild(tr);


    showRowDetails();
    numberOfContact();
    ready();
}


function showRowDetails() {
    var tableBody = document.getElementById("tbody");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log("ok");

            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("phone").value = this.cells[2].innerHTML;
            document.getElementById("email").value = this.cells[3].innerHTML;
        };
    }
}
showRowDetails();


function editDetails() {
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    table.rows[rIndex].cells[0].innerHTML = firstname;
    table.rows[rIndex].cells[1].innerHTML = lastname;
    table.rows[rIndex].cells[2].innerHTML = phone;
    table.rows[rIndex].cells[3].innerHTML = email;

    ready();
}


function deleteContact() {
    table.deleteRow(rIndex);
    numberOfContact();
    ready();    
};

function deleteFunc(){



    var a = document.getElementById("delete_alert");
    var b = document.getElementById("confirmDelete");
    var c = document.getElementById("cancelDelete");
    var d = document.getElementById("deleteButton");
    var contactName = document.getElementById("deleteMessage");

    d.onclick = function (e){
        e.preventDefault();
        a.style.display = "block";

        var message = "";
        var f = document.getElementById("fname").value;
        var l = document.getElementById("lname").value;
        message = ("Are you sure you want to delete contact "+f+" "+l+"?");
        contactName.innerText = message;

        b.onclick = function(){
            deleteContact();
            a.style.display = "none";
        }
        c.onclick = function(){
            a.style.display = "none";
            ready();
        }
    }
}

deleteFunc();