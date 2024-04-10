// importando o StyleSheet
import { StyleSheet } from "react-native";

// constante que estiliza o site
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  quadrado: {
    width: "85%",
    height: "90%",
    borderColor: "deepskyblue",
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
  },

  caixa: {
    width: "25%",
    height: "5%",
    borderColor: "deepskyblue",
    borderWidth: 3,
    borderRadius: 20,
    textAlign: "center",
    backgroundColor: "black",
    color: "deepskyblue",
    marginTop: "1%",
    fontSize: 20,
  },

  button: {
    width: "25%",
    height: "5%",
    borderColor: "deepskyblue",
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "deepskyblue",
    marginTop: "1%",
  },

  txtbutton: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
  },

  resultado: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "white",
    marginTop: "1%",
  },
});

export default styles;
