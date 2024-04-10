// componentes do react-native
import { TouchableOpacity, View } from "react-native";

// componentes que eu criei
import styles from "../styles/Style";
import Texto from "../components/Text";
import CaixaTexto from "../components/TextInput";

// componentes do react
import React, { useState } from "react";

export default function Home() {
  //   constantes com valores iniciais zerados
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");

  const farenheit = () => {
    if (celsius != "") {
      const converter = (celsius * 9) / 5 + 32;
      setResultado(converter);
    } else {
      alert("Não pode ser vazio");
    }
  };

  return (
    // view principal
    <View style={styles.container}>
      {/* view do quadrado */}
      <View style={styles.quadrado}>
        {/* componentes do site */}
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
