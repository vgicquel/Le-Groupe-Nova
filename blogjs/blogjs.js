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
	
		/* Recherche de la balise */    
		console.debug(dojo.query(".inlinelist"));
		var n;
	
		/* Remplacement */
		/*for (n=0; n <= dojo.query(".inlinelist").length; n++) {
		  dojo.place("<div class='lotusActionBar lotusBtnContainer aria_toolbar' role='toolbar' style='float:none' aria-label='Actions de blogue'>" + 
			     "<span class='lotusBtn lotusLeft'>" +
			     "<a href='https://apps.na.collabserv.com/blogs/a080f064-36ea-4105-8121-7a6a78acef94/entry/Inklusif_septieme_partie?lang=fr_fr' title='Entrée précédente' hastooltip='dijit_Tooltip_3711'>Entrée précédente</a>" +
			     "</span>" +
			     "<span class='lotusBtn lotusLeft'>" +
			     "<a href='/blogs/a080f064-36ea-4105-8121-7a6a78acef94?maxresults=25&amp;lang=fr_fr'>Page principale</a>" +
			     "</span>" +
			     "<span class='lotusBtn lotusLeft'>" +
			     "<a>Entrée suivante</a>" +
			     "</span>" +
			     "</div>", dojo.query(".inlinelist")[n],"replace");
		}*/
	
		/* Suppression de la ligne noire */
		console.debug(dojo.query("div[style='border-top: 2px solid black;height:45px;']"));
		/*dojo.place("<div style='border-top: 0px solid black;height:45px;'>",dojo.query("div[style='border-top: 2px solid black;height:45px;']")[0],"replace");*/
	
	}
	  
)
