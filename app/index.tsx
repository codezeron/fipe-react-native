import FipeScreen from "@/components/FipeScreen";
import { Marcas } from "@/models";
import fetcher from "@/services/fetcher";
import { router } from "expo-router";
import { Text } from "react-native";
import useSWR from "swr";

export default function Index() {
  const goNext = (codigoMarca: string, titulo: string) => {
    router.push({ pathname: '/modelos', params: { codigoMarca, titulo } })
  }
  const { data, error, isLoading, mutate } = useSWR<Marcas[]>('/carros/marcas', fetcher, {
    dedupingInterval: 24 * 60 * 60 * 1000
  });

  if (error) return <Text>Error na request, tente novamente</Text>;

  return <FipeScreen data={data} isLoading={isLoading} update={mutate} goNext={(codigoMarca) => {
    const marca = data?.find(item => item.codigo === codigoMarca)
    goNext(codigoMarca, marca?.nome || '')
  }} />;
}