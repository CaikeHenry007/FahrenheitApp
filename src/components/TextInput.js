// Importando o TextInput do react-native
import { TextInput } from "react-native";

export default function CaixaTexto({ txt, estilo, change }) {
  return <TextInput placeholder={txt} style={estilo} onChangeText={change} />;
}
