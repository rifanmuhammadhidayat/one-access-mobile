import { StyleSheet, View, Image, StatusBar, Animated } from "react-native";
import { WebView } from "react-native-webview";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
        <StatusBar
          backgroundColor="#0ba7e0"
          barStyle="light-content"
          translucent={false}
        />
        <Image
          source={require("./assets/splash.png")}
          style={styles.splashImage}
          resizeMode="cover"
        />
      </Animated.View>
    );
  }

  return (
    <>
      <StatusBar
        backgroundColor="#0ba7e0"
        barStyle="light-content"
        translucent={false}
      />
      <WebView
        style={styles.container}
        source={{ uri: "https://gagas-one-access.vercel.app/public" }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#0ba7e0",
  },
  splashImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
});
