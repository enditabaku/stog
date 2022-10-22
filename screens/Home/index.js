import { Text, Image, ImageBackground, ScrollView, View } from "react-native"

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
                    <UserBank> Raifaissen Bank</UserBank>
                    <UserName> Ador Sula </UserName>
                    </UserTitles>
                </UserData>
            </ImageBackground>
            </BalanceContainer>

            <BalanceCard style={globalStyles.darkShadow}>
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

            <TransactionsContainer style={globalStyles.articleShadow}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <TransactionsHeader>
                    TRANSACTIONS
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