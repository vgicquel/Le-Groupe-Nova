////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Blog Customization
// @version 0.1
// @date April, 2018
//

if(typeof(dojo) != "undefined") {
	
	require(["dojo/domReady!"], function(){
        //---------------------------------------------
        // HELPER FUNCTIONS
        var waitFor = function(callback, elXpath, maxInter, waitTime) {
		if(!maxInter) var maxInter = 100;  // number of intervals before expiring
		if(!waitTime) var waitTime = 10;  // 1000=1 second
		if(!elXpath) return;
		
		var waitInter = 0;  // current interval
		var intId = setInterval( function(){
			if (++waitInter<maxInter && !dojo.query(elXpath).length) return;
			clearInterval(intId);
			callback();
		}, waitTime);
	};
 		
	var n;
	for (n=0; n <= dojo.query(".entryContentContainerTD").length; n++) {
		dojo.place("<hr class='hr-color'>", dojo.query(".entryContentContainerTD")[n],"last");
	}
	
	var m;
	for (m=0; m <= dojo.query(".entryContentContainer").length; m++) {
		dojo.place("<br>", dojo.query(".entryContentContainer")[m],"first");
	}
		
   });
   
}
