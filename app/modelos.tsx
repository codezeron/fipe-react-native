import FipeScreen from "@/components/FipeScreen";
import { Modelos } from "@/models";
import fetcher from "@/services/fetcher";
import { router, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import useSWR from "swr";

export default function ModeloScreen() {

  const { codigoMarca, titulo } = useLocalSearchParams();

  const goNext = (codigoModelo: string, titulo: string) => {
    router.push({ pathname: '/anos', params: { codigoMarca, codigoModelo, titulo } })
  }

  const { data, error, isLoading, mutate } = useSWR<{ modelos: Modelos[] }>
    (`/carros/marcas/${codigoMarca}/modelos`, fetcher);

  if (error) {
    return <Text>Error na request, tente novamente</Text>
  }

  return (
    <FipeScreen data={data?.modelos} isLoading={isLoading} update={mutate} goNext={(codigoModelo) => {
      const modelo = data?.modelos.find(item => item.codigo === codigoModelo)
      goNext(codigoModelo, modelo?.nome || '')
    }} />
  )
}