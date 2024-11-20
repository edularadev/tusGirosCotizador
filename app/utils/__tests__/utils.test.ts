import calculateComission from "../calculateComission"; // Ajusta la ruta según la ubicación de tu función.

describe("calculateComission", () => {
  test("debe retornar una comisión fija de 3 USD para montos <= 100 USD", () => {
    expect(calculateComission(50)).toBe(3);
    expect(calculateComission(100)).toBe(3);
  });

  test("debe retornar una comisión del 3% para montos > 100 USD", () => {
    expect(calculateComission(150)).toBe(150 * 0.03);
    expect(calculateComission(200)).toBe(200 * 0.03);
  });
});
