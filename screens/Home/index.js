import { Text, Image, ImageBackground } from "react-native"

import { MainContainer, BalanceContainer, UserData, UserName, UserImage, UserBank, UserTitles, BalanceCard, BalanceHeader, BalanceText } from "./styles"
const Home = () => {
    return (
        <MainContainer>
            <BalanceContainer>
            <UserData>
                <UserImage 
                source={require("../../assets/icon.png")} />
                <UserTitles>
                <UserBank> Raifaissen Bank</UserBank>
                <UserName> Ador Sula </UserName>
                </UserTitles>
            </UserData>
            </BalanceContainer>

            <BalanceCard>
            <ImageBackground
                source={require("../../assets/images/balance.jpg")}
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
                  <BalanceHeader>BALANCE</BalanceHeader>
                  <BalanceText>56,432.00 LEK</BalanceText>
            </ImageBackground>
            </BalanceCard>
        </MainContainer>
    )
}

export default Home