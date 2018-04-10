////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Blog Customization
// @version 0.1
// @date April, 2018
//

if (typeof (dojo) != "undefined") {
    require(["dojo/domReady!"], function () {
	/* Ajout d'une ligne horizontale après chaue entrée de blog */    
	try {
		console.debug(dojo.query(".vcard"));
		var n;
		for (n=2; n <= dojo.query(".vcard").length; n=n+2) {
			dojo.place("<hr class='hr-color'>", dojo.query(".vcard")[n],"last");
		}
        } catch (e) {
            /*alert('exception occurred : ' + e);*/
		console.debug('exception occurred : ' + e);
        }
		
    });
};
