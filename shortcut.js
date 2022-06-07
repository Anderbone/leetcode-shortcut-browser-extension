currentUrl = window.location.toString();

if (currentUrl.includes("leetcode.com/problems/")) {
	document.onkeyup = function (e) {
		// ctrl + enter key to submit
		if (e.ctrlKey && e.key === 'Enter') {
			document.querySelectorAll('[ data-cy="submit-code-btn"]')[0].click()
		}
		// ctrl + atl + l to clean
		else if (e.ctrlKey && e.altKey && e.key === 'l') {
			document.querySelectorAll('.tool-button__2cBA')[2].click();
			document.evaluate("//div[text()='Your code will be discarded and reset to the default code!']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.nextSibling.childNodes[1].click();
		}
		// ctrl + ; to use example testcases
		else if (e.ctrlKey && e.key === ';') {
			document.querySelectorAll('.example-testcases__3q5c')[0].click()
		}
		// ctrl + atl + m to retrieve the last submission
		else if (e.ctrlKey && e.altKey && e.key === 'm') {
			document.querySelectorAll('.tool-button__2cBA')[1].click();
			document.evaluate("//div[contains(text(),'replaced with your last submission')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.nextSibling.childNodes[1].click();
		}
	}
}else if (currentUrl.includes("leetcode.com/explore")){
	document.onkeyup = function (e) {
		// ctrl + enter key to submit
		if (e.ctrlKey && e.key === 'Enter') {
			document.querySelectorAll('.btn-primary')[0].click()
		}
		// ctrl + atl + l to clean
		else if (e.ctrlKey && e.altKey && e.key === 'l') {
			document.querySelectorAll('.reset-btn')[0].click();
			document.evaluate("//div[contains(text(),'reset your code')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.nextSibling.childNodes[1].click();
		}
		// ctrl + ; to use example testcases
		else if (e.ctrlKey && e.key === ';') {
			document.querySelectorAll('.example-testcases__3q5c')[0].click()
		}
		// ctrl + atl + m to retrieve the last submission
		else if (e.ctrlKey && e.altKey && e.key === 'm') {
			document.querySelectorAll('.code-btn')[0].click();
			document.evaluate("//div[contains(text(),'your last')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.nextSibling.childNodes[1].click();
		}
	}
}else if (currentUrl.includes("leetcode.com/contest")){
	document.onkeyup = function (e) {
		// ctrl + enter key to submit
		if (e.ctrlKey && e.key === 'Enter') {
			document.querySelectorAll('.btn-primary')[1].click()
		}
		// ctrl + atl + l to clean
		else if (e.ctrlKey && e.altKey && e.key === 'l') {
			document.querySelectorAll('.reset-btn')[0].click();
			document.evaluate("//div[contains(text(),'reset your code')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.nextSibling.childNodes[1].click();
		}
		// ctrl + ; to use example testcases
		else if (e.ctrlKey && e.key === ';') {
			document.querySelectorAll('.btn-primary')[0].click()
		}
		// ctrl + atl + m to retrieve the last submission
		else if (e.ctrlKey && e.altKey && e.key === 'm') {
			document.querySelectorAll('.code-btn')[0].click();
			document.evaluate("//div[contains(text(),'your last')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.nextSibling.childNodes[1].click();
		}
	}
}

