import { Veiculo } from "@/models";
import fetcher from "@/services/fetcher";
import { styles } from "@/styles";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import useSWR from "swr";

export default function AnosScreen() {

  const { codigoModelo, codigoMarca, codigoAno } = useLocalSearchParams();

  const { data, error, isLoading, mutate } = useSWR<Veiculo>
    (`/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`, fetcher);

  if (error) {
    return <Text>Error na request, tente novamente</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.item_detail}>{`Marca: ${data?.Marca}`}</Text>
      <Text style={styles.item_detail}>{`Modelo: ${data?.Modelo}`}</Text>
      <Text style={styles.item_detail}>{`Ano do Modelo: ${data?.AnoModelo}`}</Text>
      <Text style={styles.item_detail}>{`Valor: ${data?.Valor}`}</Text>
      <Text style={styles.item_detail}>{`Codigo Fipe: ${data?.CodigoFipe}`}</Text>
    </View>
  )
}