import React, { useEffect, useState } from "react";

// React Navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// credentials context
import { CredentialsContext } from "./../contexts/CredentialsContext";
// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// All Screens
import Welcome from './../screens/Welcome';
import Home from "./../screens/Home";
import Logout from './../screens/Logout'

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

  const Tab = createBottomTabNavigator();

  function MyTabs() {
    const navigation = useNavigation();
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Inquiries" component={Home} />
        <Tab.Screen name="Contracts" component={Home} />
        <Tab.Screen name="Logout" component={Logout}
          listeners={() => ({
            tabPress: () => {
              console.log('erdhi')
               AsyncStorage.removeItem('credentials')
              .then(() => {
                navigation.push('Welcome')
              })
            },
          })}
        />
      </Tab.Navigator>
    );
  }

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
               <Stack.Screen name="Home" component={MyTabs} />
            </>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
