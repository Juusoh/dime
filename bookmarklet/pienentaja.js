javascript:(function() {
	var margin = document.body.style.marginRight;
	if(margin == "") {
		document.body.style.marginRight="10%";
		return;
	}
	margin = parseInt(margin);
	margin = margin + 10;
	if(margin >= 100) {
		margin = 0;
	}
	document.body.style.marginRight = margin + "%";
})();