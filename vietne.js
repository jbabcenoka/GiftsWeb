/*
 * Jevge?ja Bab?noka jb19045
 */

window.onload=function(){
	document.getElementById('women').addEventListener("click", function(){Start("women")});
	document.getElementById('men').addEventListener("click",  function(){Start("men")});
	document.getElementById('any_occation').addEventListener("click",  function(){Start("any_occation")});
	document.getElementById('kids').addEventListener("click",  function(){Start("kids")});
	function addProducts(key){
		var table = document.getElementsByTagName("Table")[0];
		var t=table.rows.length;
        for (var i=0; i<=t; i++) table.deleteRow(-1); 
		var row = table.insertRow(0);
			for (var i in gifts){
				if (gifts[i].for===key) {
 					var cell = row.insertCell(-1);
 					cell.innerHTML ="<img src="+gifts[i].source+" width='250px' height='200px'><p> Price is: " +gifts[i].price+" euro</p>";
 					cell.setAttribute("style","text-align:center");
 					if (table.rows[row.rowIndex].cells.length==3){ 
						var row = table.insertRow(-1);
					}
 				}
			} 
	}
	function Start(key){
		var table = document.getElementsByTagName("Table")[0];
		//ja tabula nav tukša, tad dzēšam viņu
		var t=table.rows.length;
        for (var i=0; i<=t; i++) table.deleteRow(-1); 
		var row = table.insertRow(0);
		if (key==="women"){
			addProducts("women");
		} else if (key==="men"){
			addProducts("men");
		} else if (key==="kids"){
			addProducts("kids");
		} else if (key==="any_occation"){
			for (var i=0; i<=2; i++){
				switch (i){
					case 0:
						var cell = row.insertCell(-1);
						cell.innerHTML ="<img src='gifts/img__occations/wedding.png' width='300px' height='300px' id='wedding'>";
						
						break;
					case 1:
						var cell = row.insertCell(-1);
						cell.innerHTML ="<img src='gifts/img__occations/christmas.png' width='300px' height='300px' id='christmas'>";
						
						break;
					case 2:
						var cell = row.insertCell(-1);
						cell.innerHTML ="<img src='gifts/img__occations/birthday.jpg' width='300px' height='300px' id='birthday'>";
						
				}
				cell.setAttribute("style","text-align:center");
				}
				document.getElementById('wedding').addEventListener("click", function(){Start("wedding")});
				document.getElementById('christmas').addEventListener("click", function(){Start("christmas")});
				document.getElementById('birthday').addEventListener("click", function(){Start("birthday")});
			
		} else if (key==="wedding"){
			addProducts("weddings");
		} else if (key==="christmas"){
			addProducts("christmas");
		} else if (key==="birthday"){
			addProducts("birthday");
		}
	}
}