import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  Alert,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View
} from "react-native";
import {
  LoginContainer,
  EyeIcon,
  MsgBox,
  StyledButton,
  LoginButtonText,
  StyledInputLabel,
  StyledTextInput,
  LoadingContainer,
  Colors
} from "../../components/style";
//colors
const { white, castletonGreen } = Colors;
// icons
import { Ionicons } from "@expo/vector-icons";
// credentials context
import { CredentialsContext } from "./../../contexts/CredentialsContext";
// Async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// api client
import axios from "axios";
// formik
import { Formik } from "formik";
//decode token
import jwt_decode from 'jwt-decode';
//navigation
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  // using navigation options
  const navigation = useNavigation();

  //login button is clicked: check if credentials are correct then persist login
  const handleLogin = async (credentials, setSubmitting) => {
      setSubmitting(true);    
      try {
        //posla url api for login 
        const url = 'https://fiskalizimi-dev-api.herokuapp.com/api/user/login';
        const result = await axios.post(url, credentials, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        if (result.status === 200) persistLogin(result.data) //if credentials are okay
      } catch (err) {
        setSubmitting(false);
        Alert.alert("", err.response.data.message);
      }
  };

  // Persisting login: After axios post request ↑
  const persistLogin = async (data) => {
    await AsyncStorage.setItem('credentials', data.data)
       .then(() => {
         const decoded = jwt_decode(data.data);
         setStoredCredentials(decoded); //store credentials
         navigation.navigate('Home');
       })
      .catch((error) => {
         Alert.alert("", "There was a problem trying to login. Please try again!");
         console.log('Error', error);
       });
  };

  const handleMessage = (message, type = "") => {
    setMessage(message);
    setMessageType(type);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -60 : 0}
        style={{ flex: 1 }}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
          <ImageBackground
              source={require("../../assets/images/login.png")}
              style={{width: Dimensions.get('window').width, height:'100%', marginTop: Platform.OS === 'ios' ? -50 : 0}}
            >
              <LoginContainer>
                <Formik
                  initialValues={{ username: "", password: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                    // if (values.username == "" || values.password == "") {
                    //   handleMessage("Ju lutem plotësoni të gjitha fushat!");
                    //   setSubmitting(false);
                    // } else {
                    //   handleLogin(values, setSubmitting);
                    // }
                    navigation.navigate('Home');
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    isSubmitting,
                  }) => (
                    <>
                      <MyTextInput
                        label="Username"
                        placeholderTextColor={white}
                        onChangeText={handleChange("username")}
                        onBlur={handleBlur("username")}
                        value={values.username}
                      />
                      <MyTextInput
                        label="Password"
                        placeholderTextColor={white}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        icon="lock"
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                      />
                      <MsgBox type={messageType}>{message}</MsgBox>

                      {!isSubmitting && (
                        <StyledButton onPress={handleSubmit}>
                          <LoginButtonText>Login</LoginButtonText>
                        </StyledButton>
                      )}
                      {isSubmitting && (
                        <StyledButton disabled={true}>
                          <ActivityIndicator size="large" color={white} />
                        </StyledButton>
                      )}
                    </>
                  )}
                </Formik>
              </LoginContainer>
            </ImageBackground>
          </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <EyeIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={20}
            color={castletonGreen}
          />
        </EyeIcon>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#FFFFFF95",
    borderWidth: 0,
    borderColor: "#D8D8D8",
    borderRadius: 5,
    width: "70%",
    height: 55,
    marginVertical: 10,
  },
});

export default Login;
