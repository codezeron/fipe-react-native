import { styles } from "@/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const data = [{ title: "Um" }];
  const [searchTerm, setSearchTerm] = useState('');
  const [filterData, setfilterData] = useState(data);

  useEffect(() => {
    const result = data.filter(item =>
      item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

    setfilterData(result);

  }, [searchTerm])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.item_text}>{item.title}</Text>
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
        data={filterData}
        rederItem={renderItem}
      />
    </View>
  );
}