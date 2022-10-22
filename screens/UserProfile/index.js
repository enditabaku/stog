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

import { globalStyles } from "../../utils/globalStyles"
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
            </ImageBackground>
            </BalanceContainer>
        </MainContainer>
    )
}

export default Profile