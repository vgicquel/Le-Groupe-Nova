////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Test Customization JS
// @version 0.1
// @date September, 2018
//
let TestJS = new __cBill_waitForDojo('TestJS'); 
TestJS.do(function () { 
  
		/* Recherche de la balise */    
		console.debug(dojo.query("div[class='' role='navigation' style='font-size: 0.9em;' aria-label=Page navigation']"));
		console.debug(dojo.query("ul[class='inlinelist lotusInlinelist']"));
	
		var list = document.getElementsByClassName("inlinelist lotusInlinelist")[0].getElementsByTagName("LI");
		for (i=0; i < list.length; i++) {
		//alert(list[i].innerHTML);
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
