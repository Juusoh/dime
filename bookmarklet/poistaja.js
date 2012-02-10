javascript:(function() {
	function klikattu(e) {
		e.preventDefault();
		e.target.parentElement.removeChild(e.target);
	}
	window.addEventListener("click", klikattu);
})();
