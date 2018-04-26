function __cBill_waitForDojo(label) {
	this.label = '***UNKNOWN***';
	if (label) this.label = label;
	__cBill_logger(this.label + '.__cBill_waitForDojo : initialising !');
	//
	//  Main function of this class
	//  When DOJO is loaded on the page, it executes the 'callback' 
	//
	this.do = function(callback, maxInter, waitTime) {
		var n = this;
		__cBill_logger(this.label + '.__cBill_waitForDojo.do : executing !');
		if(!maxInter) maxInter = 50;  // number of intervals before expiring
		if(!waitTime) waitTime = 100;  // 1000=1 second

		var waitInter = 0;  // current interval
		var intId = setInterval(function() {
			__cBill_logger(n.label + '.__cBill_waitForDojo.do : waiting for the ' + waitInter + 'th time...');
			if ((++waitInter < maxInter) && (typeof dojo === "undefined")) return;
			clearInterval(intId);
			if (waitInter >= maxInter) {
				if (document.body.classList.contains('lotusError')) {
					//
					//  If we are on an error page, do not display the alert but simply log the information
					//
					__cBill_logger(n.label + '.commonTools.WaitForDojo.do : This is normal : TIMEOUT Expired on Error page !');
				} else {
					alert(n.label + '.__cBill_waitForDojo.do : TIMEOUT EXPIRED !');
				}
				return;
			} else {
				__cBill_logger(n.label + '.__cBill_waitForDojo.do : DOJO is defined !');
				//
				//  Check the Dojo version (this is in order to keep in cosideration iFrames)
				//
				if (dojo.version.major >= 1 && dojo.version.minor >= 10) {
					__cBill_logger(n.label + '.__cBill_waitForDojo.do : Issuing Dojo/DomReady!... ');
					dojo.require("dojo.cookie");
					require(["dojo/domReady!"], callback(
					
					alert("toto");
					
					));
				} else {
					alert(n.label + '.__cBill_waitForDojo.do : BAD DOJO version !');
				}
			}
		}, waitTime);
	};
}
   
