import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  exchangeRate: {
    fontSize: 16,
    color: "#0080A1",
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 20,
    padding: 10,
  },
  inputPrefix: {
    fontSize: 16,
    color: "#3E4752",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#3E4752",
  },
  button: {
    width: "100%",
    backgroundColor: "#0080A1",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  results: {
    width: "100%",
    backgroundColor: "#E5F4F9",
    padding: 20,
    borderRadius: 8,
  },
  resultText: {
    fontSize: 14,
    color: "#3E4752",
    marginBottom: 10,
  },
  resultFinal: {
    fontSize: 16,
    color: "#0080A1",
    fontWeight: "bold",
  },
});

export default styles;
