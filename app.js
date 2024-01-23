function calculoIMC(altura, peso){
    let imc = peso / (alturaMetros * alturaMetros);
  }


  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 8;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

  
  function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 63;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

  
  function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 5; // em metros
  let largura = 15; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);


  function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 5; // em metros
  calcularAreaPerimetroSalaCircular(raio);


  function mostrarTabuada(numero1) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero1 * i;
      console.log(`${numero1} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero1 = 6;
  mostrarTabuada(numero1);



