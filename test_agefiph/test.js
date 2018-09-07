////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Test Customization JS
// @version 0.1
// @date September, 2018
//
let TestJS = new __cBill_waitForDojo('TestJS'); 
TestJS.do(function () { 
  
		/* Recherche de la balise */    
		console.debug(dojo.query(".inlinelist"));
		/*var n;*/
	
		console.debug(dojo.query("div[class='' role='navigation' style='font-size: 0.9em;' aria-label=Page navigation']"));
	
		console.debug(dojo.query("ul[class='inlinelist lotusInlinelist']"));
	
  	}
	  
)
