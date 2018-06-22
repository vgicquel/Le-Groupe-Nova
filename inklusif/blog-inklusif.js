let BlogJS = new __cBill_waitForDojo('BlogJS'); 
BlogJS.do(function () { 
	
		/* Recherche de la balise */    
		console.debug(dojo.query(".lotusinlinelist"));
		var n;
		for (n=0; n <= dojo.query(".lotusinlinelist").length; n++) {
		  dojo.place("<div class='lotusActionBar lotusBtnContainer aria_toolbar' role='toolbar' style='float:none' aria-label='Actions de blogue'>", dojo.query(".lotusinlinelist")[n],"replace");
		}

		
	}
	  
)
