import { styles } from "@/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from "@shopify/flash-list";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.item_text}>{item.name}</Text>
        <Ionicons name="chevron-forward" size={18} color="gray" />
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Buscar ..."
        placeholderTextColor="#666"
      />

      <FlashList
        style={styles.list}
        data={[]}
        rederItem={renderItem}
      />
    </View>
  );
}