import {sumar,restar} from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia restar dos numeros", () => {
    expect(restar(2, 1)).toEqual(1);
  });
});
