// import React, { Component } from 'react';
// //import react in our code. 

// //Import react-navigation
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';
// import FirstPage from './pages/FirstPage.js';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';

//import all the screens we are going to switch 
// const App = createStackNavigator({
//   //Constant which holds all the screens like index of any book 
//     FirstPage: { screen: FirstPage }, 
//     //First entry by default be our first screen if we do not define initialRouteName
//     SecondPage: { screen: SecondPage },
    
//     ThirdPage: {screen:ThirdPage},
//   },
//   {
//     initialRouteName: 'ThirdPage',
//   }
// );
// export default createAppContainer(App);
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  
  );
}