var input1Elem, input2Elem, resultElem;

function init() {
    input1Elem = document.getElementById("input1");
    input2Elem = document.getElementById("input2");
    resultElem = document.getElementById("result");
    document.getElementById("runBtn").onclick = doCalculations;
} // End init
window.onload=init;

function doCalculations() {
    var length; // Längd i meter
    var width; // bredd i meter
    var area; // Yta i kvadratmeter
    var distance; // Längd konverterad till annan enhet
    var unit = ["steg", "fot", "tum"]; // Längdenheter
    var conv = [90, 30.48, 2.54]; // Enheternas längd i centimeter
    
    length = Number(input1Elem.value);
    width = Number(input2Elem.value);
    
    // Beräkning av rektangelns area
    area = length * width;
    resultElem.innerHTML = "<p>Rektangelns area blir " + area + " m<sup>2</sup>. </p>";
    
    // Area för en ellips
    area = 3.14159 * length * width / 4;
    resultElem.innerHTML += "<p>Elipsens area blir " + area + " m<sup>2</sup>. </p>";
    
    // Arean om bredden är bredden ökas med 5
    area = (length + 5) * width;
    resultElem.innerHTML += "<p>Då längden ökas med 5 meter blir rektangelns area " + area + " m<sup>2</sup>. </p>";
    
    // Konvertering av längden till andra enheter
    resultElem.innerHTML += "<p>Längden " + length + " meter blir:</p>";
    distance = length / conv[0] * 100;
    resultElem.innerHTML += "<p>" + distance + " " + unit[0] + "</p>";
    distance = length / conv[1] * 100;
    resultElem.innerHTML += "<p>" + distance + " " + unit[1] + "</p>";
    distance = length / conv[2] * 100;
    resultElem.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";
    
    area = (length / 100 * 50 + length) * (width + 3);
    resultElem.innerHTML += "<p>Då längden ökas med 50% och bredden med 3 meter blir rektangelns area " + area + " m<sup>2</sup></p>";
    
    area = (width / conv[1] * 100) * (length / conv[1] * 100) /2;
    resultElem.innerHTML += "<p>Triangelns area blir " + area + " kvadratfot</p>";
} // End doCalculations