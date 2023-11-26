
    let nome = prompt("Digite o seu nome:")
    let alturacent = prompt("Digite a sua altura em centímetros:")
    let alturamet = alturacent / 100
    let peso = prompt("Digite o seu peso:")
    const imc = Number(peso / (alturamet*alturamet))
    let classimc 
    
    if (imc < 16) { 
        classimc = "Baixo peso, muito grave"
        //console.log(classimc)
    } else if (imc >= 16 && imc <= 16.99) {
        classimc = "Baixo peso, grave"
        //console.log(classimc)
    } else if (imc >=17 && imc <=18.49) {
        classimc = "Baixo peso"
        //console.log(classimc)
    } else if (imc >=18.50 && imc <= 24.99) {
        classimc = "Peso normal"
        //console.log (classimc)
    } else if (imc >= 25 && imc <=29.99) {
        classimc = "Sobrepeso"
        //console.log (classimc)
    } else if (imc >=30 && imc <=34.99) {
        classimc = "Obesidade grau I"
        //console.log(classimc)
    } else if (imc >=35 && imc <= 39.99) {
        classimc = "Obesidade grau II"
        //console.log (classimc)
    } else { 
        classimc = "Obesidade grau III"
        //console.log(classimc)
    }
        console.log("O resultado do seu cálculo de IMC é:")
        console.log(`Nome: ${nome}, Altura: ${alturamet} , Peso: ${peso} , IMC: ${classimc} `)