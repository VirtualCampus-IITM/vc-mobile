import { Stack } from "expo-router";
import { View, Text } from "react-native-reanimated/lib/typescript/Animated";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}
