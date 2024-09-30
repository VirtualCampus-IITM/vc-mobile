import { View, Text, StatusBar } from "react-native";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="register"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </>
  );
};

export default AuthLayout;
