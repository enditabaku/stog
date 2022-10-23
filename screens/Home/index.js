import { Text, Image, ImageBackground, ScrollView, View, Animated } from "react-native"
import { useEffect, useRef } from "react"

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

const Home = () => {

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

    // Animates the position of balance component by changing the value used as top
    const balanceDown = () => {
        Animated.timing(balanceTop, {
            toValue: 0,
            duration: 500
          }).start();
    }

    // Animates the position of transactions component by changing the value used as bottom
    const transactionsUp = () => {
        Animated.timing(transactionsBottom, {
            toValue: 0,
            duration: 1000
          }).start();
    }


    // Executes all animation functions on initial load  
      useEffect(() => {
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
                    <UserName> Ador Sula </UserName>
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