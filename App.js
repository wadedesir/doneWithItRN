import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen.js';
import ViewImageScreen from './app/screens/ViewImageScreen.js';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen.js';
import Card from './app/components/card.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewImageScreen image={require('./app/assets/chair.jpg')}/>
      {/* <WelcomeScreen /> */}
      {/* <Card image={require('./app/assets/jacket.jpg')} title="Red Jacket for Sale!" subtitle="$100" /> */}
      {/* <ListingDetailsScreen 
        image={require('./app/assets/jacket.jpg')} 
        title="Red Jacket for Sale!" 
        subtitle="$100"
        username="Mosh Hamedani"
        avatar={require('./app/assets/mosh.jpg')}
        listings={5}
      /> */}
      <StatusBar style="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
