// Importando o Text do react-native
import { Text } from "react-native";

export default function Texto({ txt, estilo }) {
  return <Text style={estilo}>{txt}</Text>;
}
