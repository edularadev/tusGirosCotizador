import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard
} from "react-native";
import styles from "./index.styles";
import calculateComission from "./utils";
import { DEFAULT_SIMULATION_VALUES, EXCHANGE_RATE } from "./constants";

export default function Index() {
  const [usdAmount, setUsdAmount] = useState("");
  const [simulation, setSimulation] = useState(DEFAULT_SIMULATION_VALUES);

  const handleSimulation = () => {
    // Validaciones
    const usd = parseFloat(usdAmount);
    if (!usdAmount || isNaN(usd) || usd <= 0) {
      Alert.alert(
        "Error",
        "Por favor ingrese un monto válido y positivo de USD."
      );
      setSimulation(DEFAULT_SIMULATION_VALUES);
      return;
    }

    //Debido a la comision fija de 3 USD, se debe establecer un monto de envio mayor, de lo contrario daria negativo el calculo
    //podria ser simplemente mayor a 3USD pero le vi mas sentido a 5 USD
    if (usd < 5) {
      Alert.alert("Error", "El monto mínimo a enviar es de 5 USD.");
      setSimulation(DEFAULT_SIMULATION_VALUES);
      return;
    }
    
    //Cerrar teclado cuando se simule de forma exitosa, para poder ver el resultado.
    Keyboard.dismiss();

    const vesEquivalent = usd * EXCHANGE_RATE;
    const commission = calculateComission(usd);
    const comissionVesEquivalent = commission * EXCHANGE_RATE;
    const finalAmount = vesEquivalent - comissionVesEquivalent;

    setSimulation({ vesEquivalent, commission, finalAmount });
  };

  const handleInputChange = (value: string) => {
    // Permitir solo números y un único punto decimal
    const sanitizedValue = value.replace(/[^0-9.]/g, "");
    // Evitar múltiples puntos decimales
    if (sanitizedValue.split(".").length - 1 > 1) return;
    setUsdAmount(sanitizedValue);
  };

  return (
    <View style={styles.body}>
      <Image
        source={require("../assets/images/tus-giros-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.exchangeRate}>1 USD = {EXCHANGE_RATE} VES</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputPrefix}>USD</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0.00"
          placeholderTextColor="#999"
          value={usdAmount}
          onChangeText={handleInputChange}
          testID="usdInput"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSimulation}
        testID="simulateButton"
      >
        <Text style={styles.buttonText}>Simular</Text>
      </TouchableOpacity>

      {simulation.vesEquivalent > 0 && (
        <View style={styles.results}>
          <Text testID="vesEquivalent" style={styles.resultText}>
            {`Equivalente en Bolívares: ${simulation.vesEquivalent.toFixed(
              2
            )} VES`}
          </Text>
          <Text testID="commission" style={styles.resultText}>
            {`Comisión de envío: ${simulation.commission.toFixed(2)} USD`}
          </Text>
          <Text testID="finalAmount" style={styles.resultFinal}>
            {`Monto a recibir: ${simulation.finalAmount.toFixed(2)} VES`}
          </Text>
        </View>
      )}
    </View>
  );
}
