let BlogJS = new __cBill_waitForDojo('BlogJS'); 
BlogJS.do(function () { 
	
		/* Recherche de la balise */ 
		console.debug(dojo.query("div[style='border-top: 2px solid black;height:45px;']"));

		/* Suppression de la ligne noire */
		dojo.query("div[style='border-top: 2px solid black;height:45px;']").style("border-top","0px solid black")
	
	}
	  
)
