import React from 'react';
import AppContainer from './src/navigation/AppNavigator';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import  AppLoading  from 'expo-app-loading';
import * as firebase from 'firebase'
import registerForPushNotificationsAsync from './src/common/GetPushToken'

var firebaseConfig = {
  apiKey: "AIzaSyCmCpbVYhlJPJrJksqDFgdwzgvFtBT9M4c",
  authDomain: "taxiapp-c85c5.firebaseapp.com",
  projectId: "taxiapp-c85c5",
  storageBucket: "taxiapp-c85c5.appspot.com",
  messagingSenderId: "643343506674",
  appId: "1:643343506674:web:cc8f483f3d4fa1d8ca846b",
  measurementId: "G-HYFVMSCYHZ",
  databaseURL : "https://taxiapp-c85c5-Default-rtdb.firebaseio.com" ,
};


firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  state = {
    assetsLoaded: false,
  };

  constructor(){
    super();
    console.disableYellowBox = true;
  }
  componentDidMount(){
    console.log('ffff')
    registerForPushNotificationsAsync()

  }
//resource load at the time of app loading
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
    
        require('./assets/images/icon.png'),
      ]),
      Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      }),
    ]);
  };
  
  render() {
    return (
        this.state.assetsLoaded ? 
          <AppContainer/>
          :         
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onFinish={() => this.setState({ assetsLoaded: true })}
            onError={console.warn}
            autoHideSplash={true}
          />
    );
  }
}