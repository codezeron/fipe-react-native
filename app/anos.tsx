import FipeScreen from "@/components/FipeScreen";
import { Anos } from "@/models";
import fetcher from "@/services/fetcher";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Text } from "react-native";
import useSWR from "swr";

export default function AnosScreen() {

  const { codigoModelo, codigoMarca } = useLocalSearchParams();

  const goNext = (codigoAnos: string) => {

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