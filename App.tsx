import { StyleSheet, View, Image } from "react-native";
import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [webLoaded, setWebLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      setIsAppReady(true);
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  if (!isAppReady) return null;

  if (!webLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("./assets/splash.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: "https://gagas-one-access.vercel.app/public" }}
      style={styles.container}
      onLoadEnd={() => setWebLoaded(true)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
