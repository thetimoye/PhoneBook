// === PROFILE PAGE SCRIPT ===

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
    
}


// === REGISTRATION MODAL FUNCTION ===
function regModal() {
    var x = document.getElementById("noAcc");
    var y = document.getElementById("signUp");
    var z = document.getElementById("close");

    x.onclick = function(e) {
        e.preventDefault();
        y.style.display = "block";
    }
    z.onclick = function(){
        y.style.display = "none";
    }
}
regModal(); 