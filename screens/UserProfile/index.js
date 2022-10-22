import { ImageBackground } from "react-native"
import {
    MainContainer, 
    BalanceContainer, 
    UserData,
    UserName, 
    UserImage, 
    UserBank, 
    UserTitles,
    StyledButton, 
    LoginButtonText,
    TransactionsContainer,
    UpperText,
    DataText
    } from "./styles"

import { globalStyles } from "../../utils/globalStyles"

const Profile = () => {

    return (
        <MainContainer>
            <BalanceContainer>
            <ImageBackground
                source={require("../../assets/images/bgbg-01.png")}
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
                      source={require("../../assets/images/user.png")}
                    />
                    <UserTitles>
                    <UserBank> Welcome</UserBank>
                    <UserName> Ador Sula </UserName>
                    <UserBank> This is your space</UserBank>
                    </UserTitles>
                </UserData>
            <TransactionsContainer style={globalStyles.imageShadow}>
            <ImageBackground
                  source={require("../../assets/images/userprofile-01.png")}
                  style={{
                      width: "100%",
                      height: "100%"
                    }}
                    imageStyle={{ borderRadius: 20}}
                  >
                    <>
                      <DataText></DataText>
                      <UpperText>Username: </UpperText><DataText>ador.sula</DataText>
                      <UpperText>Name: </UpperText><DataText>Ador</DataText>
                      <UpperText>Surname: </UpperText><DataText>Sula</DataText>
                      <UpperText>Phone Number: </UpperText><DataText>+355 68 10 10 000</DataText>
                      <UpperText>Institution: </UpperText><DataText>Tirana University</DataText>
                      <StyledButton>
                          <LoginButtonText>Edit Profile</LoginButtonText>
                      </StyledButton>
                    </>
              </ImageBackground>
            </TransactionsContainer>
            </ImageBackground>
            </BalanceContainer>
        </MainContainer>
    )
}

export default Profile