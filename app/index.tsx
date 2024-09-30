import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full">
        <Text className="text-4xl">Virtual Campus</Text>
        <Link href="/home">Move to Home</Link>
        <Link href="/login">Move to Login</Link>
        <Link href="/register">Move to Register</Link>
      </View>
    </SafeAreaView>
  );
}
