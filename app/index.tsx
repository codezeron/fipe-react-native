import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>HOME SCREEN</Text>
      <Link href={"/about"}>Go to About</Link>
    </View>
  );
}