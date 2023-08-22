currentUrl = window.location.toString();

if (currentUrl.includes("leetcode.com/problems/")) {
	document.onkeyup = function (e) {
		// ctrl + enter key to submit
		if (e.ctrlKey && e.key === 'Enter') {
			document.querySelector('[data-e2e-locator="console-submit-button"]').click()
		}
		// ctrl + atl + l to clean
		else if (e.ctrlKey && e.altKey && e.key === 'l') {
			document.evaluate ('//*[@id="editor"]/div[2]/div[2]/div/div[3]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
			waitForElm("button.text-label-r:nth-child(1)").then((elm) => {
				document.evaluate("//button[contains(text(),'Confirm')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click() 
			});
		}
		// ctrl + ' to use example testcases
		else if (e.ctrlKey && e.key === "'") {
			document.querySelector('[data-e2e-locator="console-run-button"]').click()
		}
		// ctrl + atl + m to retrieve the last submission
		else if (e.ctrlKey && e.altKey && e.key === 'm') {
			document.evaluate ('//*[@id="editor"]/div[2]/div[2]/div/div[2]/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
			if (e.ctrlKey && e.altKey && e.key === 'm'){
				document.evaluate("//button[contains(text(),'Confirm')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click() 
			}
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
		// ctrl + atl + m to retrieve the last submission
		else if (e.ctrlKey && e.altKey && e.key === 'm') {
			document.querySelectorAll('.code-btn')[0].click();
			document.evaluate("//div[contains(text(),'your last')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.nextSibling.childNodes[1].click();
		}
	}
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
