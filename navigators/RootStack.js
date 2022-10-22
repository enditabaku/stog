// core
import React, { useEffect, useState } from "react";
import { View } from "react-native";
// React Navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// credentials context
import { CredentialsContext } from "./../contexts/CredentialsContext";
// async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// icons
import { Ionicons } from "@expo/vector-icons";
// All Screens
import Welcome from './../screens/Welcome';
import Home from "./../screens/Home";
import Profile from "../screens/UserProfile";
import Inquiries from "../screens/Inquiries";
import Contracts from "../screens/Contracts";
import Logout from './../screens/Logout'

const Stack = createStackNavigator();

const RootStack = () => {
  const [hasUser, setHasUser] = useState(); // states if there is already a logged in user in the app

  useEffect(() => {
    checkLoginCredentials(); // first thing to do check if there are credentials stored
  }, [hasUser]);

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("credentials") // get credentials
      .then((result) => {
        if (result != null) { // if found results than we have a logged in user
          setHasUser(true);
        } else {
          setHasUser(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const Tab = createBottomTabNavigator();

  // Bottom tabs after login
  // Here are all screens that are accessible only if user is logged in
  function MyTabs() {
    const navigation = useNavigation();
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <View>
                <Ionicons
                  // style={focused ? styles.focused : styles.icon}
                  name="home"
                  size={20}
                  color='#2a2d2d'
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <View>
                <Ionicons
                  // style={focused ? styles.focused : styles.icon}
                  name="person"
                  size={20}
                  color='#2a2d2d'
                />
              </View>
            ),
          }}
          />
        <Tab.Screen
          name="Inquiries"
          component={Inquiries}
          options={{
            tabBarIcon: () => (
              <View>
                <Ionicons
                  // style={focused ? styles.focused : styles.icon}
                  name="document"
                  size={20}
                  color='#2a2d2d'
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contracts"
          component={Contracts}
          options={{
            tabBarIcon: () => (
              <View>
                <Ionicons
                  // style={focused ? styles.focused : styles.icon}
                  name="folder"
                  size={20}
                  color='#2a2d2d'
                />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Logout"
          component={Logout}
          listeners={() => ({
            tabPress: () => {
               AsyncStorage.removeItem('credentials')
              .then(() => {
                navigation.push('Welcome')
              })
            },
          })}
          options={{
            tabBarIcon: () => (
              <View>
                <Ionicons
                  // style={focused ? styles.focused : styles.icon}
                  name="log-out"
                  size={20}
                  color='#2a2d2d'
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  // Navigation Stack
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
            {/* Welcome or Login screen is the first screen that renders if no user is logged in */}
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
