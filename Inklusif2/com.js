if (typeof (dojo) != "undefined") {
    require(["dojo/domReady!"], function () {
	/* Ajout d'une ligne horizontale après chaue entrée de blog */    
	try {
		console.debug(dojo.query(".colspanInHikari"));
		var n;
		for (n=0; n <= dojo.query(".colspanInHikari").length; n++) {
			dojo.place("<br>", dojo.query(".colspanInHikari")[n],"last");
		}
        } catch (e) {
            /*alert('exception occurred : ' + e);*/
		        console.debug('exception occurred : ' + e);
        }		
    });
};
