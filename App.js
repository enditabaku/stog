import React, { useState, useEffect } from 'react';
// React navigation stack
import RootStack from './navigators/RootStack';
// apploading
import AppLoading from 'expo-app-loading';
// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// credentials context
import { CredentialsContext } from './contexts/CredentialsContext';

import * as Font from 'expo-font';


export default function App() {
  const loadFonts = async () => {
    await Font.loadAsync({
        'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
      });
    await Font.loadAsync({
        'Poppins-Black': require('./assets/Fonts/Poppins-Black.ttf'),
      });
      await Font.loadAsync({
        'Poppins-ExtraBold': require('./assets/Fonts/Poppins-ExtraBold.ttf'),
      });
      await Font.loadAsync({
        'Poppins-Light': require('./assets/Fonts/Poppins-Light.ttf'),
      });
      await Font.loadAsync({
        'Poppins-ExtraLight': require('./assets/Fonts/Poppins-ExtraLight.ttf'),
      });
}

  useEffect(() => {
    loadFonts()
  }, [])


  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");
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

  return (
    <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <RootStack />
    </CredentialsContext.Provider>
  );
}