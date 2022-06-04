document.onkeyup = function(e) {
	// ctrl + enter key binding on chrome
	if(e.ctrlKey && e.key === 'Enter'){
	document.querySelectorAll('[ data-cy="submit-code-btn"]')[0].click()
	}
	// mac chrome cmd + enter
	// var key = e.key;
	// var cmd_held = e.metaKey;
	// if(cmd_held && e.keyCode === 13){
	// document.querySelectorAll('[ data-cy="submit-code-btn"]')[0].click()
	// }
	
	}