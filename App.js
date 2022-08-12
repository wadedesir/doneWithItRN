import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Screen from './app/components/Screen.js';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import ViewImageScreen from './app/screens/ViewImageScreen.js';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen.js';
import Card from './app/components/Card.js';
import MessagesScreen from './app/screens/MessagesScreen.js';
import MyAccountScreen from './app/screens/MyAccountScreen.js';
import ListingsScreen from './app/screens/ListingsScreen.js';
import AppTextInput from './app/components/AppTextInput.js';
import AppPicker from './app/components/AppPicker.js';
import Colors from './app/config/colors.js';
import LoginScreen from './app/screens/LoginScreen.js';
import RegisterScreen from './app/screens/RegisterScreen.js';
import ListingEditScreen from './app/screens/ListingEditScreen.js';

let categories = [
  { id: 1, label: 'Cars' },
  { id: 2, label: 'Houses' },
  { id: 3, label: 'Dogs' },
]

export default function App() {
  const [selectedItem, setSelectedItem] = React.useState(categories[0]);

  return (
    // <ListingEditScreen />
    // <RegisterScreen />

    // <LoginScreen />
    // <Screen style={styles.container}>
    //   {/* <AppTextInput icon="email" color={Colors.primary} placeholder='Username'/>
    //   <AppPicker 
    //     icon="apps" 
    //     items={categories} 
    //     selectedItem={selectedItem} 
    //     placeholder='Category' 
    //     onSelectItem={(item) => setSelectedItem(item)}
    //   /> */}
    //   {/* <ListingsScreen></ListingsScreen> */}
    //   {/* <MyAccountScreen /> */}
      <MessagesScreen /> 
    //   {/* <ViewImageScreen image={require('./app/assets/chair.jpg')}/> */}
    //   {/* <WelcomeScreen /> */}
      //  <Card image={require('./app/assets/jacket.jpg')} title="Red Jacket for Sale!" subtitle="$100" /> 
      // <ListingDetailsScreen 
      //   image={require('./app/assets/jacket.jpg')} 
      //   title="Red Jacket for Sale!" 
      //   subtitle="$100"
      //   username="Mosh Hamedani"
      //   avatar={require('./app/assets/mosh.jpg')}
      //   listings={5}
      // /> 
    //   <StatusBar style="dark-content" />
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light
  }
});
