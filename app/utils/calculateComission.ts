import { COMISSION_RATE } from "../constants";

const calculateComission = (amount: number) => {
    // Comisión fija de 3 USD si el monto es <= 100 USD
    if (amount <= 100) return 3;
    // Comisión del 3% si el monto es > 100 USD
    return amount * COMISSION_RATE;
  };
export default calculateComission;