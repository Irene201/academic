window.onload = function() {
	var tbl = document.getElementById('pricetable').tHead;
	for(var h = 0 ; h < tbl.rows.length ; h++) {
		var newTH = document.createElement('th');
		newTH.innerHTML = 'Summa';
		tbl.rows[h].appendChild(newTH);
	}
	
	var tblBody = document.getElementById('pricetable').tBodies[0];
	for(var i = 0 ; i < tblBody.rows.length ; i++) {
		var newCell = tblBody.rows[i].insertCell(-1);
	}
	
	var tabell = document.getElementById('pricetable');
	var rowCount = tabell.rows.length;
	var columnCount = tabell.rows[0].cells.length;
	var row = tabell.insertRow(rowCount);
	row.id = "sumrow";
	
	for(var i = 0 ; i < columnCount ; i++) {
		row.insertCell(i);		
	}
	
	var cont = document.getElementById('content');
	var nyKnapp = document.createElement("input");
	nyKnapp.setAttribute("type", "button");
	nyKnapp.setAttribute("value", "Beräkna pris");
	nyKnapp.onclick = berakna;
	
	cont.appendChild(nyKnapp);
}

function berakna() {
	var tabell = document.getElementById('pricetable');
	
	var rader = tabell.getElementsByTagName("tr");
	var sumrow = document.getElementById("sumrow");
	
	var summ = 0;
	var antal = 0;
	
	var p = 0;
	
	var q;
	var r;
	
	var tabcel = rader[0].getElementsByTagName("th");
	var columnCount = tabell.rows[0].cells.length;
	//Kollar vart raderna ligger
	for(var i = 0 ; i < columnCount ; i++) {
		
		if(tabcel[i].firstChild.nodeValue == "Pris")
			p = i;
		if(tabcel[i].firstChild.nodeValue == "Antal")
			q = i;
		if(tabcel[i].firstChild.nodeValue == "Summa")
			r = i;
	}
	
	for(var i = 1 ; i < rader.length - 1 ; i++) {
		var tabellceller = rader[i].getElementsByTagName("td");
		var input = rader[i].getElementsByTagName("input")[0];
		antal += parseInt(input.value);
		
		var summa = sum(tabellceller, input, p);
		
		summ += parseInt(summa);
		
		var sumtext = document.createTextNode(summa);
		
		var sumelement = tabellceller[tabellceller.length - 1];
		//Rensar boxen
		if(sumelement.firstChild)
			sumelement.removeChild(sumelement.firstChild);
		sumelement.appendChild(sumtext);
		
	}
	
	var sumCells = sumrow.getElementsByTagName("td");
	sumCells[q].innerText = antal;
	sumCells[r].innerText = summ;
}

function sum(celler, inp, prisCel) {
	
	var pris = parseInt(celler[prisCel].firstChild.nodeValue);
	
	var antal = parseInt(inp.value);
	
	var summa = pris * antal;
	
	return summa;
}