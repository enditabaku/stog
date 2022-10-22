import React, { useEffect, useState } from "react";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// credentials context
import { CredentialsContext } from "./../contexts/CredentialsContext";
// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// All Screens
import Welcome from './../screens/Welcome';
import Home from "./../screens/Home";

const Stack = createStackNavigator();

const RootStack = () => {
  const [hasUser, setHasUser] = useState();

  useEffect(() => {
    checkLoginCredentials();
  }, [hasUser]);

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("credentials")
      .then((result) => {
        if (result != null) {
          setHasUser(true);
        } else {
          setHasUser(false);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <CredentialsContext.Consumer>
      {({}) => (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              header: () => null,
            }}
          >
            <>
               <Stack.Screen name="Welcome" component={Welcome} />
               <Stack.Screen name="Home" component={Home} />
            </>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
