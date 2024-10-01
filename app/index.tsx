import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appearance, useColorScheme } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();
  function MyComponent() {
    let colorScheme = useColorScheme();

    if (colorScheme === "dark") {
      // render some dark thing
    } else {
      // render some light thing
    }
  }

  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full">
        <Text className="text-4xl">Virtual Campus</Text>
        <Link href="/home">Move to Home</Link>
        <Link href="/login">Move to Login</Link>
        <Link href="/register">Move to Register</Link>
        <Link href="/onboarding">Move to Onboarding</Link>
      </View>
    </SafeAreaView>
  );
}
