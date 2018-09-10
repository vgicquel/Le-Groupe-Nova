////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Test Customization JS
// @version 0.1
// @date September, 2018
//
let TestJS = new __cBill_waitForDojo('TestJS'); 
TestJS.do(function () { 
  
		/* Recherche de la balise */    
		console.debug(dojo.query("ul[class='inlinelist lotusInlinelist']"));
		
		var list = document.getElementsByClassName("inlinelist lotusInlinelist")[0].getElementsByTagName("LI");
		
		if (list[0].innerHTML.includes("</a>")) {
				alert(list[0].innerHTML);
		} else {
			list[0].innerHTML = "<a>" + list[0].innerHTML + "</a>";
		}
		
		if (list[2].innerHTML.includes("</a>")) {
				alert(list[2].innerHTML);
		} else {
			list[2].innerHTML = "<a>" + list[2].innerHTML + "</a>";
		}
		
		for (n=0; n <= dojo.query("ul[class='inlinelist lotusInlinelist']").length; n++) {
			  dojo.place("<div class='lotusActionBar lotusBtnContainer aria_toolbar' role='toolbar' style='float:none' aria-label='Actions de blogue'>" + 
					 "<span class='lotusBtn lotusLeft'>" +
					 list[0].innerHTML + 
					 "</span>" +
					 "<span class='lotusBtn lotusLeft'>" +
					 list[1].innerHTML +
					 "</span>" +
					 "<span class='lotusBtn lotusLeft'>" +
					 list[2].innerHTML +
					 "</span>" +
					 "</div>", dojo.query(".inlinelist")[n],"replace");
		
		}
	
  	}
	  
)
