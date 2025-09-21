import FipeScreen from "@/components/FipeScreen";
import { Anos } from "@/models";
import fetcher from "@/services/fetcher";
import { router, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import useSWR from "swr";

export default function AnosScreen() {

  const { codigoModelo, codigoMarca } = useLocalSearchParams();

  const goNext = (codigoAno: string) => {
    router.push({ pathname: '/veiculo', params: { codigoMarca, codigoModelo, codigoAno } })
  }

  const { data, error, isLoading, mutate } = useSWR<Anos[]>
    (`/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`, fetcher);

  if (error) {
    return <Text>Error na request, tente novamente</Text>
  }

  return (
    <FipeScreen data={data} isLoading={isLoading} update={mutate} goNext={goNext} />
  )
}