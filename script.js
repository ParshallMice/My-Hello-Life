this.addEventListener('keypress', (event) => {
    if (event.keyCode == 45 || event.keyCode == 37) {
       changeMode("Use")
    } else if (event.keyCode == 61 || event.keyCode == 39) {
       changeMode("Edit")
    } else if (event.keyCode == 13) {
       document.getElementsByClassName("doneEditing")[0].click();
       document.getElementsByClassName("doneEditing")[1].click();
    } else if (event.keyCode == 27) {
       document.getElementsByClassName("doneEditing")[0].click();
    } else if (event.keyCode == 92) {
       document.getElementById("sdb").click();
       setTimeout(delSla, 0.01);
    }
});

function delSla() {
document.getElementById("psname").value = document.getElementById("psname").value.replace("\\", "")
}


document.getElementById('Edit').onclick = function() { document.getElementById("psname").focus() }