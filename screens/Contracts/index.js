import { Text, Image, ImageBackground, ScrollView, View } from "react-native"
import { useEffect, useState, useContext } from "react"
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
import { CredentialsContext } from "../../contexts/CredentialsContext";
import axios from 'axios';

const Contracts = () => {

    const { storedCredentials } = useContext(CredentialsContext)
    const [userData, setUserData] = useState(null);
  
  
    const getUserData = async () => {
      try{
          const uri ='http://pragmaticsteam-001-site1.atempurl.com/api/Authentication/CurrentUser'
          const result = await axios.get(uri, {
              headers: { Authorization: `Bearer ${storedCredentials}` }
          })
          if (result.status === 200) {
              setUserData(result.data)
          }
      } catch (error){
          console.log(error.response)
      }
  }
    
    useEffect(() => {
      getUserData()
    }, [])

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
                    <UserBank> {userData?.fullName}</UserBank>
                    <UserName> Contracts </UserName>
                    </UserTitles>
                </UserData>
            </ImageBackground>
            </BalanceContainer>

            <TransactionsContainer style={globalStyles.articleShadow}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height: 10}} />
                  {
                    transactions.map((transaction) => (
                        <>
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
                        </>
                    ))
                  }
                  
                <View style={{height: 200}} />
                </ScrollView>
            </TransactionsContainer>
        </MainContainer>
    )
}

export default Contracts