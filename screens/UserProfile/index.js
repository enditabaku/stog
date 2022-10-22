import { Text, Image, ImageBackground, ScrollView, View } from "react-native"
import {
    MainContainer, 
    BalanceContainer, 
    UserData,
    UserName, 
    UserImage, 
    UserBank, 
    UserTitles,
    BalanceCard, 
    BalanceHeader,
    BalanceText,
    TransactionsContainer,
    TransactionCard,
    TransactionAmount,
    TransactionDate,
    TransactionDescription,
    TransactionContainer,
    TransactionsHeader,
    BalanceCards,
    } from "./styles"
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

import { globalStyles } from "../../utils/globalStyles"
import Formik from 'formik'

const Profile = () => {
    return (
        <MainContainer>
            <BalanceContainer>
            <ImageBackground
                source={require("../../assets/images/header.png")}
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  imageStyle={{ borderRadius: 20}}
                >
                <UserData>
                    <UserImage 
                    source={require("../../assets/images/user.png")} />
                    <UserTitles>
                    <UserBank> Hello</UserBank>
                    <UserName> Ador Sula </UserName>
                    </UserTitles>
                </UserData>
            <TransactionsContainer style={globalStyles.imageShadow}>
              {/* <LoginContainer>
                <Formik
                //   onSubmit={() => {
                //      navigation.push('Home');
                //   }}
                >
                  {() => (
                    <>
                      <MyTextInput
                        label="Username"
                        placeholderTextColor='#000'
                      />
                      <MyTextInput
                        label="Password"
                        placeholderTextColor='#000'
                        icon="lock"
                        isPassword={true}
                      />
                    </>
                  )}
                </Formik>
              </LoginContainer> */}
            </TransactionsContainer>
            </ImageBackground>
            </BalanceContainer>
        </MainContainer>
    )
}

const MyTextInput = ({
  label,
}) => {
  return (
    <>
      <StyledInputLabel>{label}</StyledInputLabel>
    </>
  );
};

export default Profile