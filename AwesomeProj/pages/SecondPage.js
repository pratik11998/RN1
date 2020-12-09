import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text,Button} from 'react-native';
import { Camera ,} from 'react-native-camera';
export default class SecondPage extends Component {
  
  takePicture = () => {
    const options = {};
    this.camera.capture({ metadata: options })
    .then((data) => console.log(data))
    .catch(err => console.error(err));
 }
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
        <Camera
               ref = {(cam) => {
                  this.camera = cam;
               }}
               style = {styles.preview}
               aspect = {Camera.constants.Aspect.fill}>
            </Camera>
            <Text style = {styles.capture} onPress = {this.takePicture}>CAPTURE</Text>
      <Text>profile</Text>
        <Button title='Logout' onPress={() =>navigate('ThirdPage')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
 },
 capture: {
    fontSize: 30,
    color: 'red',
    alignSelf: 'center',
 }
});