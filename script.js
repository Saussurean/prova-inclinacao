var divTeste = document.getElementById("teste");
var divBase = document.getElementById("base");
var rangeLevel = document.getElementById("range");

divTeste.innerHTML = divBase.innerHTML;

function study() {
	divTeste.innerHTML = divBase.innerHTML;
    divBase.classList.add("invisible");
	divTeste.classList.remove("invisible");

	let level = rangeLevel.value ?? 1;

	let percent = level / 10;

	divTeste.querySelectorAll("li").forEach(child => child.textContent = zap(child.textContent, percent));
}

function show() {
	divTeste.innerHTML = divBase.innerHTML;
    divBase.classList.remove("invisible");
	divTeste.classList.add("invisible");
}

function zap(text, percent=0.1) {
		const regex = /[\wΔ∇∂αáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕàèìòùÀÈÌÒÙÇç]/g;

		if (percent == 1) { return text.replaceAll(regex, '_') }

	    	text = text.split('');
		let count = Math.ceil(text.length * percent);

		for (let i=0, trials=0; i<count; i++) {
			let pos = Math.floor(Math.random() * (text.length-1));

			if (!regex.test(text[pos])) {
				if (++trials > 100) break;
				i--; continue;
			}

			text[pos] = '_';
		}

		return text.join('');
	}
