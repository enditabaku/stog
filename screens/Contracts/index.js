import { Text, Image, ImageBackground, ScrollView, View } from "react-native"
import {
    MainContainer, 
    BalanceContainer, 
    UserData,
    UserName, 
    UserImage, 
    UserBank, 
    UserTitles,
    BalanceText,
    TransactionsContainer,
    TransactionContainer,
    } from "./styles"

import { globalStyles } from "../../utils/globalStyles"
const Contracts = () => {
    const transactions = [
        {
            id: "234234234234324234234",
            description: "Lorem ipsum alor domaet",
            amount: "320.00",
            isIncoming: false,
            date: "17/02/2121",
            studentId: "2131234213123",
        },
        {
            id: "23423423er4234324234234",
            description: "Lorem ipsum alor domaet",
            amount: "32,342.00",
            isIncoming: true,
            date: "17/02/2121",
            studentId: "2131234213123",
        },
        {
            id: "234234234234324234234",
            description: "Lorem ipsum amogus domaet",
            amount: "3,230.00",
            isIncoming: true,
            date: "17/02/2121",
            studentId: "2131234213123",
        },
        {
            id: "234234234234324234234",
            description: "Lorem ipsum alor domaet",
            amount: "53,420.00",
            isIncoming: false,
            date: "17/02/2121",
            studentId: "2131234213123",
        },
    ]
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
                    source={require("../../assets/images/contract.png")} />
                    <UserTitles>
                    <UserBank> Ador Sula</UserBank>
                    <UserName> Contracts </UserName>
                    </UserTitles>
                </UserData>
            </ImageBackground>
            </BalanceContainer>

            <TransactionsContainer style={globalStyles.articleShadow}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height: 10}} />
                  {
                    transactions.map((transaction, i) => (
                        <View key={i}>
                            <TransactionContainer>
                                <ImageBackground
                                    source={require("../../assets/images/contract1(1).jpg")}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    imageStyle={{ borderRadius: 20}}
                                    >
                                        <BalanceText>15/09 Startup</BalanceText>
                                </ImageBackground>
                            </TransactionContainer>
                        </View>
                    ))
                  }
                  
                <View style={{height: 200}} />
                </ScrollView>
            </TransactionsContainer>
        </MainContainer>
    )
}

export default Contracts