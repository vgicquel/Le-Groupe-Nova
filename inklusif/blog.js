////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Blog Customization
// @version 0.1
// @date April, 2018
//

if(typeof(dojo) != "undefined") {
	require(["dojo/domReady!"], function(){
        try {
            
            // utility function to let us wait for a specific element of the page to load...
            var waitFor = function(callback, elXpath, elXpathRoot, maxInter, waitTime) {
                if(!elXpathRoot) var elXpathRoot = dojo.body();
                if(!maxInter) var maxInter = 10000;  // number of intervals before expiring
                if(!waitTime) var waitTime = 1;  // 1000=1 second
                if(!elXpath) return;
                var waitInter = 0;  // current interval
                var intId = setInterval( function(){
                    if( ++waitInter<maxInter && !dojo.query(elXpath,elXpathRoot).length) return;

                    clearInterval(intId);
                    if( waitInter >= maxInter) { 
                        console.log("**** WAITFOR ["+elXpath+"] WATCH EXPIRED!!! interval "+waitInter+" (max:"+maxInter+")");
                    } else {
                        console.log("**** WAITFOR ["+elXpath+"] WATCH TRIPPED AT interval "+waitInter+" (max:"+maxInter+")");
                        callback();
                    }
                }, waitTime);
            };
            
            waitFor( function(){
                
				/* Ajout d'une ligne horizontale après chaue entrée de blog */    
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

            }, ".lotusStreamTopLoading div.loaderMain.lotusHidden");


      } catch(e) {
          console.debug('exception occurred : ' + e);
      }
   });
}
