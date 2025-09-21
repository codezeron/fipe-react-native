import { styles } from "@/styles";
import { TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Buscar ..."
        placeholderTextColor="#666"
      />
    </View>
  );
}