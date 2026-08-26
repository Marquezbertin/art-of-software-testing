# The Art of Software Testing - Implementação Prática

![GitHub repo size](https://img.shields.io/github/repo-size/Marquezbertin/art-of-software-testing)
![GitHub language](https://img.shields.io/github/languages/count/Marquezbertin/art-of-software-testing)
![GitHub last commit](https://img.shields.io/github/last-commit/Marquezbertin/art-of-software-testing)
![GitHub issues](https://img.shields.io/github/issues/Marquezbertin/art-of-software-testing)
![GitHub forks](https://img.shields.io/github/forks/Marquezbertin/art-of-software-testing)

## Sobre

Este repositório tem como objetivo implementar, na prática, os exemplos apresentados no livro **"The Art of Software Testing"**. Cada caso de teste é reproduzido com diferentes abordagens e frameworks para que possamos analisar sua eficácia e explorar boas práticas de qualidade de software.

## Objetivo

Demonstrar, através de exemplos concretos, conceitos fundamentais de testes de software, tais como:

- Classificação de entradas válidas e inválidas
- Testes unitários com Jest
- Testes de interface do usuário com Selenium
- Boas práticas de qualidade de software

## Estrutura do Repositório

Cada caso de teste está organizado em pastas separadas, contendo os arquivos necessários para execução e testes.

| Pasta | Descrição |
|-------|-----------|
| `Case Classificação de Triangulo` | Implementação do classificador de triângulos com testes unitários (Jest) e de interface (Selenium) |
| `Testes Manuais` | Documentação de testes manuais executados |

## Casos Implementados

### Classificador de Triângulo

Um clássico exemplo de teste de caixa branca que classifica um triângulo com base em seus três lados:

- **Equilátero**: três lados iguais
- **Isósceles**: dois lados iguais
- **Escaleno**: três lados diferentes
- **Inválido**: lados que não formam um triângulo (lado zero ou negativo, viola desigualdade triangular)

**Funcionamento:** A função `classificarTriangulo(a, b, c)` recebe três números inteiros e retorna uma string descrevendo o tipo de triângulo ou se a entrada é inválida.

## Como Executar os Testes

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar testes unitários

```bash
npm test
```

Isso executará todos os testes Jest localizados em `Caso Classificador de Triangulo/Teste de Unidade/`.

### 3. Executar testes de interface (Selenium)

Os testes de interface exigem que o sistema esteja rodando localmente (ex: `http://localhost:3000`). Consulte o arquivo `Teste de Interface/triangulo.test.js` para mais detalhes.

## Tecnologias Utilizadas

- **JavaScript** - linguagem de programação
- **Jest** - framework de testes unitários
- **Selenium WebDriver** - para testes de interface do navegador
- **Node.js** - ambiente de execução

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma nova branch para sua contribuição (`git checkout -b feature/novo-caso`).
3. Adicione novos exemplos de testes ou melhore os existentes.
4. Commit suas alterações (`git commit -m 'add: novo caso de teste'`).
5. Push para a branch (`git push origin feature/novo-caso`).
6. Abra um Pull Request para revisão.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Bruno Bertin Marquez – Analista de QA.

---

> *"Os testes são a rede de segurança que nos permite refatorar com confiança."*