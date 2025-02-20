const { Builder, By, until } = require('selenium-webdriver');

async function testarClassificacaoTriangulo() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Acessa a página do sistema (substitua pela URL correta do seu projeto)
    await driver.get('http://localhost:3000');

    // Preenche os campos de entrada com valores para um triângulo escaleno
    await driver.findElement(By.id('lado1')).sendKeys('4');
    await driver.findElement(By.id('lado2')).sendKeys('7');
    await driver.findElement(By.id('lado3')).sendKeys('5');

    // Clica no botão para classificar o triângulo
    await driver.findElement(By.id('botaoClassificar')).click();

    // Aguarda a resposta e captura o resultado
    let resultado = await driver.wait(
      until.elementLocated(By.id('resultado')),
      5000
    ).getText();

    // Verifica se a saída está correta
    if (resultado === 'Triângulo escaleno') {
      console.log('Teste PASSOU ✅');
    } else {
      console.log('Teste FALHOU ❌ - Resultado:', resultado);
    }
  } finally {
    // Fecha o navegador
    await driver.quit();
  }
}

testarClassificacaoTriangulo();
