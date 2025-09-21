import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: 'Tabela FIPE' }} />
    <Stack.Screen
      name="modelos"
      options={({
        route,
      }: {
        route: { params?: { titulo?: string } };
      }) => ({
        title: `Modelos ${route.params?.titulo || ''}`,
      })}
    />
    <Stack.Screen name="anos" options={({
      route,
    }: {
      route: { params?: { titulo?: string } };
    }) => ({
      title: `Anos ${route.params?.titulo || ''}`,
    })} />
    <Stack.Screen name="veiculo" options={{ title: 'Detalhes do Veículo' }} />
  </Stack>;
}
