document.getElementById('convert').onclick = tempConvert;
document.getElementById('reset').onclick = clearForm;

function tempConvert() {
    var c = document.getElementById('cinput').value;
    var f = document.getElementById('finput').value;
    var k = document.getElementById('kinput').value;

    if (c != "") {
        f = (parseFloat(c) * 9) / 5 + 32;
        k = (parseFloat(c) + 273.15);
    }
    else if (f != "") {
        c = ((parseFloat(f) - 32) * 5) / 9;
        k = (parseFloat(f) - 32) * 5 / 9 + 273.15;
    }
    else if (k != "") {
        f = (parseFloat(k) - 273.15) * 9 / 5 + 32;
        c = (parseFloat(k) - 273.15);
    } 
    else {
        alert("Please enter a value to convert");
    }

    document.getElementById('cinput').value = parseFloat(c).toFixed(3);
    document.getElementById('finput').value = parseFloat(f).toFixed(3);
    document.getElementById('kinput').value = parseFloat(k).toFixed(3);
}

function clearForm() {
    document.getElementById('cinput').value = "";
    document.getElementById('finput').value = "";
    document.getElementById('kinput').value = "";
}