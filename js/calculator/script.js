function btnclick(val) {
    document.getElementById("screen").value += val
}
function clrbtn() {
    document.getElementById("screen").value = ""
}

function eqclick() {
    var text = document.getElementById("screen").value
    try {
        var result = eval(text)
        document.getElementById("screen").value = result
    } catch (err) {
        document.getElementById("screen").value = "Error";
    }
}