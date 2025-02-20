# Classificador de Triângulo

Este projeto implementa um classificador de triângulos, determinando se um conjunto de três lados forma um triângulo equilátero, isósceles, escaleno ou se os valores fornecidos não podem formar um triângulo válido.

## Estrutura do Projeto

triangulo.js: Contém a lógica principal do classificador de triângulos.

triangulo.test.js: Testes unitários utilizando Jest.

teste_interface.js: Testes de interface utilizando Selenium WebDriver.

## Tecnologias Utilizadas

* Node.js: Ambiente de execução JavaScript.

* Jest: Framework de testes unitários.

* Selenium WebDriver: Automação de testes em navegador.

* Chromedriver: Necessário para execução dos testes com Selenium no Google Chrome.

## Como Executar

1. Instalar Dependências

npm install

2. Executar Testes Unitários

npm test

3. Executar Testes de Interface

node teste_interface.js

## Possíveis Erros e Soluções

ERR_CONNECTION_REFUSED

Caso o erro net::ERR_CONNECTION_REFUSED ocorra ao executar os testes de interface:

Verifique se o servidor da aplicação está rodando corretamente.

Confirme se o chromedriver está atualizado e compatível com a versão do Google Chrome instalada.

## Contribuição

Sinta-se à vontade para abrir uma issue ou enviar um pull request para melhorias e correções.