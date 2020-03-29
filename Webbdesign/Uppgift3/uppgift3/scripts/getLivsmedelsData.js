$("#tabell").hide();
//när man klickar på sök-knappen
$("#sok-button").click(function() {
	//Rensar tabellen från tidigare sökning
	$("#tabell > tbody").empty();
	//Hämtar innehållet i inmatningsfältet
	var livsmedStr = $('#livsmedelsSokOrd').val();

	//Om sökningen ger upphov till fler träff än noll
	//Utför en förfrågan till webbtjänsten om datan jag önskar hämta
	$.ajax({
		url: "https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php",
		dataType: "jsonp",
		
		data: {
			namn: livsmedStr //Det som skrivs in i sökfältet
		},
		
		//Om förfrågan gått bra
		success: function(response) {
			
			var foodArray = response.livsmedel;
			if(foodArray == 0)
			{
				
				$("#tabell").hide();
			} else {
				for(var i = 0 ; i < foodArray.length ; i++) {
				    var namn = foodArray[i].namn;
				    var energi = foodArray[i].energi;
				    var protein = foodArray[i].protein;
				    var fett = foodArray[i].fett;
				    var kolhydrater = foodArray[i].kolhydrater;
				
				    $("#tabell > tbody").append("<tr><td>" + namn + "</td><td>" + energi + "</td><td>" + kolhydrater + "</td><td>" + protein + "</td><td>" + fett + "</td></tr>");
				    $("#tabell").show();
			    }
			}
			
	    }
	});
});
