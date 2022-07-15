import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import ViewImageScreen from './app/screens/ViewImageScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewImageScreen /> */}
      <WelcomeScreen />
      <StatusBar style="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
