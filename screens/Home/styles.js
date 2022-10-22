import styled from "styled-components"
import { Colors } from "../../components/style"

export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const BalanceContainer = styled.View`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    padding-top: 50px;
    border-radius: 20px;
    background: ${Colors.primary};
`

export const UserData = styled.View`
    width: 100%;
    height: 70%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const UserTitles = styled.View`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 10px;
`

export const UserName = styled.Text`
    color: ${Colors.text};
    font-size: 36px;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 700;
`

export const UserBank = styled.Text`
    color: lightgray;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 200;
    padding-left: 10px;
`
export const BalanceCards = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BalanceCard = styled.View`
    width: 80%;
    height: 170px;
    border-radius: 50px;
    position: relative;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BalanceHeader = styled.Text`
    color: ${Colors.text};
    font-size: 24px;
    font-weight: 300;
`

export const BalanceText = styled.Text`
    color: ${Colors.text};
    font-size: 32px;
    font-weight: 800;
`

export const TransactionsHeader = styled.Text`
    font-size: 24px;
    color: #191970;
    font-weight: 800;
    padding-top: 10px;
    text-align: center;
`

export const TransactionsContainer = styled.View`
    width: 100%;
    height: 60%;
    border-radius: 50px 50px 0 0;
    padding: 10px 0 25px 0;
    background: ${Colors.transactionsBg};
`

export const TransactionContainer = styled.View`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 20px;
`

export const TransactionDate = styled.Text`
    color: ${Colors.black};
    font-size: 12px;
    padding-left: 5px;
`

export const TransactionCard = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`

export const TransactionDescription = styled.Text`
    font-size: 14px;
    font-weight: 600;
`

export const TransactionAmount = styled.Text`
    font-weight: 800;
`