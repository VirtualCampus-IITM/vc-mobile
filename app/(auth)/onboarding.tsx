import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <>
      <StatusBar networkActivityIndicatorVisible={false} translucent />
      <ImageBackground source={require("@/assets/images/bg.jpg")}>
        <SafeAreaView className="">
          <View className="flex justify-center items-center flex-row w-full h-full relative ">
            <View className="pb-5">
              <Text className="text-primary font-psemibold text-3xl">
                Virtual Campus
              </Text>
              <Text className="text-primary font-pregular">
                For the intellectuals
              </Text>
            </View>
            <View className="absolute flex right-0 scale-75 object-contain pl-5">
              <Image source={require("../../assets/images/rocket.png")} />
            </View>
            <View className="absolute bottom-80 left-0 w-full flex ">
              <View className="absolute object-contain z-20 mt-24">
                <Image source={require("../../assets/images/Vector1.png")} />
              </View>
              <View className="flex justify-center items-center absolute w-full mt-20">
                <TouchableOpacity
                  className="z-20 absolute  w-[80%] h-[50px] "
                  onPress={() => router.push("/register")}
                ></TouchableOpacity>
                <TouchableOpacity
                  className="z-10  w-[80%] h-[50px] "
                  onPress={() => router.push("/register")}
                >
                  <View className="w-full bg-tertiary  rounded-[8px] z-10 flex justify-center items-center h-full">
                    <Text>Join Now</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="absolute object-contain  top-0">
                <Image source={require("../../assets/images/Vector2.png")} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default Onboarding;
