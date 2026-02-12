import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simulasi loading (ganti dengan logika loading sebenarnya)
    setTimeout(async () => {
      setReady(true);
      await SplashScreen.hideAsync();
    }, 2000); // 2 detik
  }, []);

  if (!ready) return null;

  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://gagas-one-access.vercel.app/public" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});