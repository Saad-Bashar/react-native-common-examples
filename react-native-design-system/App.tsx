import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Text from "./app/components/Text/Text";
import Constants from "expo-constants";

let isStorybookEnabled =
  Constants.expoConfig?.extra?.storybookEnabled === "true";

if (!isStorybookEnabled) {
  SplashScreen.preventAutoHideAsync();
}

function App() {
  const [fontsLoaded] = useFonts({
    "InstrumentSans-Bold": require("./assets/fonts/InstrumentSans-Bold.ttf"),
    "InstrumentSans-Regular": require("./assets/fonts/InstrumentSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View
      className="items-center justify-center flex-1"
      onLayout={onLayoutRootView}
    >
      <Text variant="heading-medium" numberOfLines={1} className="p-4">
        Laborum dolore fugiat non non id laborum commodo irure. Dolor officia
        minim sunt anim amet non amet elit officia.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

let AppEntryPoint = App;

if (isStorybookEnabled) {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
