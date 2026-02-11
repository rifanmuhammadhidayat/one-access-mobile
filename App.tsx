import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    SplashScreen.hideAsync();
  }, []);

  if (!ready) return null;

  return (
    <WebView
      source={{ uri: "https://gagas-one-access.vercel.app/public" }}
      style={styles.container}
      javaScriptEnabled
      domStorageEnabled
      startInLoadingState
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
