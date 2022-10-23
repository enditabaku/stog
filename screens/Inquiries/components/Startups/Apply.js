import { TextInput, Provider } from 'react-native-paper';
import { KeyboardAvoidingView, StyleSheet, View, Text, ImageBackground, Platform, TouchableOpacity, ScrollView  } from 'react-native';
import { UserName, UserBank, UserTitles, TransactionsContainer, BalanceContainer, LoginButtonText, StyledButton} from "./styles";
import { globalStyles } from '../../../../utils/globalStyles';

import { useNavigation } from '@react-navigation/native';

const Apply = (props) => {

    const navigation = useNavigation();
    console.log(props)

    return (
        <>
        <Provider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : " "}
            style={{ flex: 1, backgroundColor: 'transparent' }}
          >
            <BalanceContainer>
            <ImageBackground
                source={require("../../../../assets/images/header.png")}
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  imageStyle={{ borderRadius: 40}}
                >
                    <UserTitles>
                        <UserBank> Apply for </UserBank>
                        <UserName> Startup name </UserName>
                    </UserTitles>
            </ImageBackground>
            </BalanceContainer>
            <TransactionsContainer style={[globalStyles.darkShadow]}>
                    <TextInput
                        label="Additional Notes"
                        style={styles.codeInput}
                        multiline={true}
                        numberOfLines={15}
                    />
                     <StyledButton onPress={() => navigation.push("Home")}>
                          <LoginButtonText>Apply</LoginButtonText>
                      </StyledButton>
            </TransactionsContainer>
          </KeyboardAvoidingView>
        </Provider>
      </>
    )
}

const styles = StyleSheet.create({
    codeInput: {
      backgroundColor: '#F7F7F7',
      borderWidth: 0,
      width: '85%',
      padding: 0,
      marginVertical: 10,
      marginHorizontal: 17,
      borderBottomColor:'red',
      borderBottomWidth:1,
      borderRadius: 10,
    },
  });

export default Apply