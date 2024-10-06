import {sumar,restar} from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia sumar dos numeros", () => {
    expect(restar(3, 2)).toEqual(1);
  });
});
