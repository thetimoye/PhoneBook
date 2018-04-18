
// === REGISTRATION MODAL FUNCTION ===
function regModal() {
    var x = document.getElementById("noAcc");
    var y = document.getElementById("signUp");
    var z = document.getElementById("close");
    //var i = document.getElementById("reg_button");

    x.onclick = function(e) {
        e.preventDefault();
        y.style.display = "block";
    }
    z.onclick = function(){
        y.style.display = "none";
    }
}
regModal();

