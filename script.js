function addContact(){
    var rows="";
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    
    for(var i=0;i<rows;i++){
        rows+="<td>"+i+"</td><td>"+firstname+"</td><td>"+lastname+"</td><td>"+phone+"</td><td>"+email+"</td>";

        var tbody = document.querySelector("#contact-list tbody");
        var tr = document.createElement("tr");

        tr.innerHTML = rows;
        tbody.appendChild(tr);
    }
}