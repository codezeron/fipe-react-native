import { FipeItem } from "@/models";
import { styles } from "@/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import { RefreshControl, Text, TextInput, TouchableOpacity, View } from "react-native";

interface IFipeScreen {
  data?: FipeItem[];
  isLoading: boolean;
  update: () => void;
  goNext: (codigo: string) => void;
}

export default function FipeScreen({ data, isLoading, goNext, update }: IFipeScreen) {
  console.log(data);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterData, setfilterData] = useState<FipeItem[]>([]);

  useEffect(() => {
    if (!data) return;

    const result = data.filter(item =>
      item.nome.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

    setfilterData(result);

  }, [searchTerm, data])

  const renderItem = ({ item }: { item: FipeItem }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => goNext(item.codigo)}>
        <Text style={styles.item_text}>{item.nome}</Text>
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
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={update} />}
      />
    </View>
  );
}