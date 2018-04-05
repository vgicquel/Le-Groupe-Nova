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
		
	/*try {
		dojo.place("<hr>", dojo.doc.body,"last");
        } catch (e) {
            alert('exception occurred : ' + e);
        }*/
	    
	try {
		dojo.place("<hr>", "span.vcard","last");
        } catch (e) {
            alert('exception occurred : ' + e);
        }
		
    });
}
