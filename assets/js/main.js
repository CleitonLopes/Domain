

function verifyDomain (e) {

	e.preventDefault()

	let domain = document.getElementById('domain').value

	if (domain === '') {

		let invalid = document.getElementById('isValid').className

		if(invalid === 'domain-valid') {

			document.getElementById('isValid').className = 'domain-invalid'

		}

	} else {

		window.setTimeout(function () {

			setStorage(domain)

			window.location = 'http://' + domain + '.bredasweb.com.br/'

		}, 1000)

	}

}

function setStorage(domain) {

	let date = new Date();
	document.cookie = `bredasweb=${domain}; expires=; path=/; domain=bredasweb.com.br; `

}