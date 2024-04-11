function calcularMedia(idades) {
    let total = 0;
    for (let idade of idades) {
        total += idade;
    }
    return total / idades.length;
}

function encontrarIdadeMaxima(idades) {
    return Math.max(...idades);
}

function encontrarIdadeMinima(idades) {
    return Math.min(...idades);
}

function calcularPorcentagem(parte, total) {
    return (parte / total) * 100;
}

function questionarioFilme() {
    const numeroPessoas = 5;
    let idades = [];
    let mulheres = 0;
    let homens = 0;
    let opiniaoPessimo = 0;
    let opiniaoOtimoBom = 0;

    for (let i = 0; i < numeroPessoas; i++) {
        let idade = parseInt(prompt("Digite a idade da pessoa" + (i + 1) + ":"));
        let sexo = prompt("Digite o sexo da pessoa " + (i + 1) + " (M para masculino, F para feminino):").toUpperCase();
        let opiniao = parseInt(prompt("Digite a opinião da pessoa: " + (i + 1) + " (1-péssimo, 2-regular, 3-bom, 4-ótimo):"));

        while (sexo !== "M" && sexo !== "F") {
            sexo = prompt("Sexo inválido! Digite M para masculino ou F para feminino:").toUpperCase();
        }

        while (opiniao < 1 || opiniao > 4 || isNaN(opiniao)) {
            opiniao = parseInt(prompt("Opinião inválida! Digite 1-péssimo, 2-regular, 3-bom, 4-ótimo:"));
        }

        idades.push(idade);

        if (sexo === "M") {
            homens++;
        } else {
            mulheres++;
        }

        if (opiniao === 1) {
            opiniaoPessimo++;
        } else if (opiniao === 3 || opiniao === 4) {
            opiniaoOtimoBom++;
        }
    }

    const mediaIdade = calcularMedia(idades);
    const idadeMaxima = encontrarIdadeMaxima(idades);
    const idadeMinima = encontrarIdadeMinima(idades);
    const porcentagemOtimoBom = calcularPorcentagem(opiniaoOtimoBom, numeroPessoas);

    alert("Média de idade: " + mediaIdade.toFixed(2) + "\n" +
          "Idade da pessoa mais velha: " + idadeMaxima + "\n" +
          "Idade da pessoa mais nova: " + idadeMinima + "\n" +
          "Quantidade de pessoas que responderam péssimo: " + opiniaoPessimo + "\n" +
          "Porcentagem de pessoas que responderam ótimo e bom: " + porcentagemOtimoBom.toFixed(2) + "%\n" +
          "Número de mulheres que responderam ao questionário: " + mulheres + "\n" +
          "Número de homens que responderam ao questionário: " + homens);
}

questionarioFilme();
