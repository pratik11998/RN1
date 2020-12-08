import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button,Text} from 'react-native';
//import all the components we are going to use.
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
 class FirstPage extends Component {

 

  render() {
   {/* const { navigate } = this.props.navigation;*/}
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>home</Text> 
    </View>
     
  
    );
  }
}
const TabNavigator=createMaterialBottomTabNavigator(
  {
    FirstPage:{screen:FirstPage,
      navigationOptions:{
        tabBarLabel:'Home',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor:'#67bafc'},
      
        

      }
   
    },
    SecondPage:{screen:SecondPage,
      navigationOptions:{
        tabBarLabel:'Profile',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor:'#67bafc'},
       

      }
   
    }

  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer(TabNavigator);