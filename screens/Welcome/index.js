import React from "react";
import { SafeAreaView, ImageBackground, Dimensions, Platform } from "react-native";
import{
  WelcomeText,
  WelcomeContainer,
  StartButton,
  ButtonContainer,
  ButtonText,
} from '../../components/style';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  
  const navigation = useNavigation();
  const goToPage = (page) => {
    navigation.push(page);
  }

  return (
    <>
      <SafeAreaView>
      </SafeAreaView>
    </>
  )
}

export default Welcome;