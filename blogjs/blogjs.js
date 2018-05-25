////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Blog Customization JS
// @version 0.1
// @date May, 2018
//

let BlogJS = new __cBill_waitForDojo('BlogJS'); 
BlogJS.do(function () { 

		/* Ajout d'une ligne horizontale après chauque entrée de blog */    
		console.debug(dojo.query(".entryContentContainerTD"));
		var n;
		for (n=0; n <= dojo.query(".entryContentContainerTD").length; n++) {
		  dojo.place("<hr class='hr-color'>", dojo.query(".entryContentContainerTD")[n],"last");
		}

		/* Ajout d'un espace entre les metas données du titre et le corps du blog */   
		console.debug(dojo.query(".entryContentContainer"));
		var m;
		for (m=0; m <= dojo.query(".entryContentContainer").length; m++) {
			dojo.place("<br>", dojo.query(".entryContentContainer")[m],"first");
		}
	
	}
	  
)
