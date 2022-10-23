import { Text, Image, ImageBackground, ScrollView, View, Animated } from "react-native"
import { useEffect, useRef, useContext, useState } from "react"
import { MainContainer, 
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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../../contexts/CredentialsContext";

const Home = () => {
    const { storedCredentials } = useContext(CredentialsContext)
    const [userData, setUserData] = useState(null);
    // Values to animate balance card
    const opacityCard = useRef(new Animated.Value(0)).current;
    const leftCard = useRef(new Animated.Value(0)).current;

    // Values to animate balance container
    const balanceTop = useRef(new Animated.Value(-300)).current;

    const transactionsBottom = useRef(new Animated.Value(-800)).current;

    // Animates the opacity of balance card by changing the value used as opacity
    const fadeCard = () => {
        Animated.timing(opacityCard, {
          toValue: 1,
          duration: 1200
        }).start();
      };
    
    // Animates the position of balance card by changing the value used as left
    const swipeCard = () => {
        Animated.timing(leftCard, {
            toValue: 0,
            duration: 600
          }).start();
    }

    // Animates the opsition of balance component by changing the value used as top
    const balanceDown = () => {
        Animated.timing(balanceTop, {
            toValue: 0,
            duration: 500
          }).start();
    }

    const transactionsUp = () => {
        Animated.timing(transactionsBottom, {
            toValue: 0,
            duration: 1000
          }).start();
    }

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
        fadeCard()
        balanceDown()
        transactionsUp()
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
            <BalanceContainer style={{top:balanceTop}}>
            <ImageBackground
                source={require("../../assets/images/header.png")}
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
                <UserData>
                    <UserImage 
                        source={require("../../assets/images/user.png")} />
                    <UserTitles>
                    <UserBank> Raifeissen Bank</UserBank>
                    <UserName> {userData?.fullName} </UserName>
                    </UserTitles>
                </UserData>
            </ImageBackground>
            </BalanceContainer>

            <BalanceCard style={[globalStyles.darkShadow,
            {
                left: leftCard,
                opacity: opacityCard,
            }]} >
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
                  <BalanceHeader>Balance</BalanceHeader>
                  <BalanceText>56,432.00 LEK</BalanceText>
            </ImageBackground>
            </BalanceCard>

            <TransactionsContainer style={[globalStyles.darkShadow, {bottom: transactionsBottom}]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <TransactionsHeader>
                    Transactions
                </TransactionsHeader>

                <View style={{height: 30}} />
                  {
                    transactions.map((transaction) => (
                        <TransactionContainer>
                            <TransactionDate>
                                {transaction.date}
                            </TransactionDate>
                                <TransactionCard>
                                    <TransactionDescription>
                                        {transaction.description}
                                    </TransactionDescription>
                                    <TransactionAmount style={{color: transaction.isIncoming ? "#228B22" : "#FF0000"}}>
                                        {transaction.isIncoming ? "+" : "-"}
                                        {transaction.amount}
                                    </TransactionAmount>
                                </TransactionCard>
                            </TransactionContainer>
                    ))
                  }
                <View style={{height: 100}} />
                </ScrollView>
            </TransactionsContainer>
        </MainContainer>
    )
}

export default Home