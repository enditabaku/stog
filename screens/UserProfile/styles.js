import { Dimensions, Platform } from 'react-native';
import styled from "styled-components"
import { Colors } from "../../components/style"

export const MainContainer = styled.View`
    width: 100%;
    height: 110%;
    display: flex;
    align-items: center;
`

export const BalanceContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 50px;
    margin-top: -50px;
    border-radius: ${Platform.OS === "ios" ? '0 0 20px 20px': 20};
`

export const UserData = styled.View`
    width: 100%;
    height: 30%;
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
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Poppins-Black'
`

export const UserBank = styled.Text`
    color: lightgray;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 200;
    padding-left: 10px;
    font-family: 'Poppins-Regular'
`
export const BalanceCards = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BalanceCard = styled.View`
    width: 80%;
    border-radius: 50px;
    position: relative;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BalanceHeader = styled.Text`
    color: ${Colors.darkGrey};
    font-size: 24px;
    font-weight: 300;
`

export const BalanceText = styled.Text`
    color: ${Colors.randomGrey};
    font-size: 30px;
    font-weight: 600;
`

export const TransactionsHeader = styled.Text`
    font-size: 24px;
    color: #191970;
    font-weight: 800;
    padding-top: 10px;
    text-align: center;
`

export const TransactionsContainer = styled.View`
    width: 90%;
    height: 57%;
    border-radius: ${Platform.OS === "ios" ? '50px 50px 0 0': 50};
    margin-top: 0px;
    background: ${Colors.white};
`

export const TransactionContainer = styled.View`
    display: flex;
    width: auto;
    flex-direction: column;
    padding-right: 20px;
    padding-left: 20px;
    margin: 20px;
    border-radius: 10px;
    height: 150px;
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
export const LoginContainer = styled.View`
  width: 100%;
  flex: 1;
//   align-content: center;
//   justify-content: center;
//   align-items: center;
  margin-top: 0px;
`;

export const UpperText = styled.Text`
  color: ${Colors.black};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 200;
  padding-left: 30px;
  font-family: 'Poppins-Light'
`;

export const DataText = styled.Text`
  color: ${Colors.black};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  padding-left: 30px;
  padding-bottom: 10px;
  font-family: 'Poppins-Regular'
`;

export const StyledTextInput = styled.TextInput`
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 16px;
  height: 50px;
  width: 85%;
  margin-vertical: 3px;
  margin-bottom: 5px;
  color: ${Colors.darkGrey};
  border: 1px solid ${Colors.whiteGrey}
`;


export const StyledButton = styled.TouchableOpacity`
  padding: 5px 15px;
  width: 40%;
  background-color: ${Colors.darkred};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-vertical: 5px;
  height: 45px;
  margin-horizontal: 30px;
`;

export const LoginButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
  font-family: 'Poppins-Medium'
`;