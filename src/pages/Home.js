import { TouchableOpacity, View } from "react-native";
import styles from "../styles/Style";
import Texto from "../components/Text";
import CaixaTexto from "../components/TextInput";
import React, { useState } from "react";

export default function Home() {
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");

  const farenheit = () => {
    const converter = (celsius * 9) / 5 + 32;
    setResultado(converter);
    console.log("funfou");
  };

  return (
    <View style={styles.container}>
      <View style={styles.quadrado}>
        <Texto txt="Transforme Celsius em Fahrenheit" estilo={styles.titulo} />
        <CaixaTexto
          txt="Digite a temperatura em Celsius"
          estilo={styles.caixa}
          value={celsius}
          change={setCelsius}
        />
        <TouchableOpacity style={styles.button} onPress={farenheit}>
          <Texto txt="Calcular" estilo={styles.txtbutton} />
        </TouchableOpacity>
        <Texto estilo={styles.resultado} txt={resultado} />
      </View>
    </View>
  );
}
