import FipeScreen from "@/components/FipeScreen";
import { Marcas } from "@/models";
import fetcher from "@/services/fetcher";
import { Text } from "react-native";
import useSWR from "swr";

export default function Index() {

  const { data, error, isLoading, mutate } = useSWR<Marcas[]>('/carros/marcas', fetcher);

  if (error) return <Text>Error na request, tente novamente</Text>;

  return <FipeScreen data={data} isLoading={isLoading} />;
}