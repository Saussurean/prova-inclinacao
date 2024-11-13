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

function zap(text, percentage) {
    // Define a regex para as letras que serão substituídas
    const regex = /[\wΔ∇∂αáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕàèìòùÀÈÌÒÙÇç]/g;
    
    // Encontra todas as letras no texto que correspondem à regex
    const matches = [...text.matchAll(regex)];

    // Calcula o número de letras a serem substituídas
    const numToReplace = Math.ceil(percentage * matches.length);
    
    // Embaralha os índices das letras correspondentes para escolha aleatória
    const indices = matches.map(match => match.index);
    const selectedIndices = indices.sort(() => Math.random() - 0.5).slice(0, numToReplace);
    
    // Converte o texto em um array de caracteres para substituição
    const textArray = [...text];
    selectedIndices.forEach(index => {
        textArray[index] = '_';
    });
    
    // Junta o array de caracteres de volta em uma string e retorna o resultado
    return textArray.join('');
}
// aaa
