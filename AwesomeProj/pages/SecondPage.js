import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import FirstPage1 from './FirstPage.js';
import SecondPage1 from './SecondPage.js';
  
import {  
    createSwitchNavigator,  
    createAppContainer
    
} from 'react-navigation';  
import { createStackNavigator  } from 'react-navigation-stack';
import {   createDrawerNavigator } from 'react-navigation-drawer';
import FirstPage from './FirstPage.js';
export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
  

const DashboardStackNavigator = createStackNavigator(  
    {  
        FirstPage1: FirstPage
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  
  
const WelcomeStackNavigator = createStackNavigator(  
    {  
         SecondPage1:FirstPage
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  
const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: {  
        screen: DashboardStackNavigator  
    },  
    Welcome: {  
        screen: WelcomeStackNavigator  
    },  
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Dashboard: { screen: AppDrawerNavigator },  
    Welcome: { screen: SecondPage1 },  
  
});  
  
const AppContainer = createAppContainer(AppDrawerNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  