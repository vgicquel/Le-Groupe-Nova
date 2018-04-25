////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Blog Customization
// @version 0.1
// @date April, 2018
//

if (typeof (dojo) != "undefined") {
	console.log("Erreur typeof");
	
    require(["dojo/domReady!"], function () {
	/* Ajout d'une ligne horizontale après chaque entrée de blog */    
	try {
		console.debug(dojo.query(".entryContentContainerTD"));
		var n;
		for (n=0; n <= dojo.query(".entryContentContainerTD").length; n++) {
			dojo.place("<hr class='hr-color'>", dojo.query(".entryContentContainerTD")[n],"last");
		}
        } catch (e) {
            /*alert('exception occurred : ' + e);*/
		console.debug('exception occurred : ' + e);
        }
	    
	/* Ajout d'un espace entre les metas données du titre et le corps du blog */    
	try {
		console.debug(dojo.query(".entryContentContainer"));
		var m;
		for (m=0; m <= dojo.query(".entryContentContainer").length; m++) {
			dojo.place("<br>", dojo.query(".entryContentContainer")[m],"first");
		}
        } catch (e) {
            /*alert('exception occurred : ' + e);*/
		console.debug('exception occurred : ' + e);
}
		
    });
};
