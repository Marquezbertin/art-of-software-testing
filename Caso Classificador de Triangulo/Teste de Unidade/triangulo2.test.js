const classificarTriangulo = require('./triangulo2');

describe("Testes para classificação de triângulos", () => {
    test("Triângulo escaleno", () => {
        expect(classificarTriangulo(4, 7, 5)).toBe("Triângulo escaleno");
    });

    test("Triângulo equilátero", () => {
        expect(classificarTriangulo(3, 3, 3)).toBe("Triângulo equilátero");
    });

    test("Triângulo isósceles", () => {
        expect(classificarTriangulo(5, 5, 3)).toBe("Triângulo isósceles");
    });

    test("Entrada inválida (lado zero)", () => {
        expect(classificarTriangulo(0, 5, 5)).toBe("Não é um triângulo");
    });

    test("Entrada inválida (lado negativo)", () => {
        expect(classificarTriangulo(-3, 4, 5)).toBe("Não é um triângulo");
    });

    test("Não forma triângulo (soma de lados igual ao terceiro)", () => {
        expect(classificarTriangulo(1, 2, 3)).toBe("Não é um triângulo");
    });

    test("Entrada inválida (valores não inteiros)", () => {
        expect(classificarTriangulo(2.5, 3.5, 5.5)).toBe("Não é um triângulo");
    });
});
