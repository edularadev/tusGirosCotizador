import React from "react";
import { Alert } from 'react-native';
import { render, fireEvent } from "@testing-library/react-native";
import Index from "..";

jest.spyOn(Alert, 'alert');

describe("handleSimulation", () => {
  test("debe mostrar un error si el monto no es un numero valido", () => {
    const { getByPlaceholderText, getByTestId } = render(<Index />);
    const input = getByTestId("usdInput");
    const button = getByTestId("simulateButton");

    fireEvent.changeText(input, "a");
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "Por favor ingrese un monto válido y positivo de USD."
    );
  });
  test("debe mostrar un error si el monto es menor a 5 USD", () => {
    const { getByPlaceholderText, getByTestId } = render(<Index />);
    const input = getByTestId("usdInput");
    const button = getByTestId("simulateButton");

    fireEvent.changeText(input, "4");
    fireEvent.press(button);

    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "El monto mínimo a enviar es de 5 USD."
    );
  });

  test("debe calcular correctamente el monto final para valores válidos", () => {
    const { getByPlaceholderText, getByTestId } = render(<Index />);
    const input = getByTestId("usdInput");
    const button = getByTestId("simulateButton");

    fireEvent.changeText(input, "150");
    fireEvent.press(button);

    expect(getByTestId("vesEquivalent").props.children).toContain("7950");
    expect(getByTestId("commission").props.children).toContain("4.5");
    expect(getByTestId("finalAmount").props.children).toContain("7711.5");
  });
});
