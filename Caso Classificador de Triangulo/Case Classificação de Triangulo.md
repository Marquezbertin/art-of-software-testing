📌 Case: Classificador de Triângulos

🎯 Introdução

Este estudo de caso tem como objetivo demonstrar a importância da criação de casos de teste e sua aplicação prática na verificação da corretude de um sistema. O exemplo utilizado é um classificador de triângulos, inspirado no livro The Art of Software Testing, que recebe três valores inteiros representando os lados de um triângulo e determina sua classificação como equilátero, isósceles ou escaleno.

🔍 Descrição do Problema

O sistema deve ler três números inteiros positivos e, com base neles, classificar o triângulo conforme as regras matemáticas:

Triângulo Equilátero: três lados iguais.

Triângulo Isósceles: dois lados iguais.

Triângulo Escaleno: todos os lados diferentes.

Não é um triângulo: se não obedecer à regra da desigualdade triangular.

✅ Conjunto de Casos de Teste

Para garantir que o programa funcione corretamente, foi elaborado um conjunto de testes abrangendo diferentes cenários:

1️⃣ Casos de Teste Básicos (Triângulos Válidos)

ID

Entrada (Lados)

Resultado Esperado

T01

(3, 3, 3)

Equilátero

T02

(5, 5, 3)

Isósceles

T03

(4, 7, 5)

Escaleno

2️⃣ Casos de Teste com Restrições Matemáticas

ID

Entrada (Lados)

Resultado Esperado

T04

(2, 2, 4)

Não é um triângulo

T05

(1, 2, 3)

Não é um triângulo

T06

(6, 6, 10)

Isósceles

3️⃣ Casos de Teste com Valores Limite

ID

Entrada (Lados)

Resultado Esperado

T07

(0, 5, 5)

Não é um triângulo

T08

(-3, 4, 5)

Não é um triângulo

T09

(999999, 999999, 999999)

Equilátero

T10

(1, 1, 2)

Não é um triângulo

📊 Análise de Cobertura de Testes

A matriz de testes cobre os seguintes critérios:

Partições de Equivalência: triângulos válidos e inválidos.

Valores Limítrofes: zero, negativos e valores extremos.

Permutações e Combinações: diferentes ordens de entrada.

Fluxo de Controle: validação de todas as regras do algoritmo.

Com isso, garantimos 100% de cobertura para os principais cenários, tornando os testes confiáveis e robustos.

🛠️ Implementação

O sistema foi desenvolvido em JavaScript e os testes automatizados foram criados usando Jest para testes unitários e Selenium WebDriver para testes de interface gráfica.

🚀 Conclusão

Esse estudo de caso reforça a importância da criação de um conjunto abrangente de testes para validar a lógica de um sistema. Com a abordagem adotada, conseguimos minimizar falhas e garantir a confiabilidade da aplicação.

Este é apenas um dos casos práticos que fazem parte do repositório art-of-software-testing. Mais casos serão adicionados em breve!

📌 Se tiver sugestões ou quiser contribuir, fique à vontade para abrir um Pull Request! 🚀