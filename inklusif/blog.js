////
// @author Vincent GICQUEL LE GROUPE NOVA
// @name Blog Customization
// @version 0.1
// @date April, 2018
//

if (typeof (dojo) != "undefined") {
    require(["dojo/domReady!"], function () {
        /*try {
            dojo.place(
               "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/novaliance-samples/blog.css?repoName=novaliance-samples\"></link>",
				dojo.doc.head,
				"last"
            );
        } catch (e) {
            alert('exception occurred : ' + e);
        }*/
		
	try {
		dojo.place("<hr class='hr-red'>", dojo.doc.body,"last");
        } catch (e) {
            alert('exception occurred : ' + e);
        }
	    
	try {
		/*dojo.place("<hr class='hr-red'>", span.vcard,"last");*/
		
		 dojo.query(".vcard").forEach(function(node, index, arr){
		 	console.debug(node.innerHTML);
		 	dojo.place("<hr class='hr-red'>", node.innerHTML,"last");
  });
		
        } catch (e) {
            alert('exception occurred : ' + e);
        }
		
    });
}
