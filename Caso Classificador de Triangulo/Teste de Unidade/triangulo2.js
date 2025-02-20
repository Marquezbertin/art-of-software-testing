function classificarTriangulo(a, b, c) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) return "Não é um triângulo";
    if (a <= 0 || b <= 0 || c <= 0) return "Não é um triângulo";
    if (a + b <= c || a + c <= b || b + c <= a) return "Não é um triângulo";

    if (a === b && b === c) return "Triângulo equilátero";
    if (a === b || a === c || b === c) return "Triângulo isósceles";
    return "Triângulo escaleno";
}

module.exports = classificarTriangulo;
