import React, { useState, useEffect } from 'react';
// React navigation stack
import RootStack from './navigators/RootStack';
// apploading
import AppLoading from 'expo-app-loading';
// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// credentials context
import { CredentialsContext } from './contexts/CredentialsContext';
// font family
import * as Font from 'expo-font';

export default function App() {
  // Asynchronous loading of fonts that will be used in the project
  const loadFonts = async () => {
    await Font.loadAsync({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      });
    await Font.loadAsync({
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    });
    await Font.loadAsync({
        'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
      });
      await Font.loadAsync({
        'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
      });
      await Font.loadAsync({
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
      });
      await Font.loadAsync({
        'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
      });
}

  // firstly load the fonts
  useEffect(() => {
    loadFonts()
  }, [])


  const [appReady, setAppReady] = useState(false); // state to track if app is reade
  const [storedCredentials, setStoredCredentials] = useState(""); // state to store credentials

  //check the credentials on login to store them 
  const checkLoginCredentials = () => {
    AsyncStorage.getItem('credentials')
    .then((result) => {
      if(result!= null){
        setStoredCredentials(result);
      }
      else {
        setStoredCredentials(null);
      }
    })
     .catch((error) => console.log(error)); 
  };

  if (!appReady) {
    return <AppLoading startAsync={checkLoginCredentials} onFinish={() => setAppReady(true)} onError={console.warn} />;
  }

  // if app is ready open the first screen
  return (
    <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <RootStack />
    </CredentialsContext.Provider>
  );
}