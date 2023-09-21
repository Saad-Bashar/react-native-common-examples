import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

function FontLoader({ children }) {
  const [fontsLoaded] = useFonts({
    "InstrumentSans-Bold": require("../assets/fonts/InstrumentSans-Bold.ttf"),
    "InstrumentSans-Regular": require("../assets/fonts/InstrumentSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return children;
}

export default FontLoader;
