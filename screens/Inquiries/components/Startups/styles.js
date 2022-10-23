import styled from "styled-components";
import { Colors } from "../../../../components/style";
import { Animated } from 'react-native';

export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 30px;
    align-items: center;
    background-color: ${Colors.transactionsBg};
`

export const NewButton = styled.TouchableOpacity`
  padding: 5px 15px;
  width: 70%;
  background-color: ${Colors.red};
  border: 1px solid ${Colors.darkred};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 55px;
`

export const ButtonText = styled.Text`
    font-size: 20px;
    color: ${Colors.text};
    font-family: 'Poppins-ExtraBold';
`

export const InquiriesContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    background-color: ${Colors.transactionsBg};
    border-radius: 30px;
    height: 100%;
`

export const HeaderText = styled.Text`
    font-size: 28px;
    font-family: 'Poppins-Black';
    text-align: center;
    padding-bottom: 20px;
`

export const Inquiries = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.transactionsBg};
`

export const Inquiry = styled.View`
    border-radius: 10px;
    min-width: 90%;
    max-width: 90%;
    height: auto;
    margin: 20px 0 20px 0;
    padding: 20px;
    background: #DDE4E3;
`
export const InquiryDate = styled.Text`
    color: slategray;
    font-size: 12px;
`

export const InquiryTitle = styled.Text`
    font-family: "Poppins-ExtraBold";
    font-size: 22px;
    text-align: left;
`

export const InquiryInfo = styled.View`
    display: flex;
    flex-direction: column;
`

export const InquiryInfoText = styled.Text`
    font-family: "Poppins-ExtraBold";
    font-size: 14px;
`

export const InquiryInfoTextUnderlined = styled.Text`
    font-family: "Poppins-Regular";
    font-size: 14px;
    text-decoration: underline;
`
export const Block = styled.View`
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: auto;
    margin-top: 20px;
    background-color: ${Colors.white};
    padding:20px;
    border-radius: 30;
`

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${Colors.red};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-vertical: 5px;
  width: 200px;
`;

export const BtnText = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
  text-align: center;
  width: 200px;
  text-transform: uppercase;
`;

export const BalanceContainer = styled(Animated.View)`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    padding-top: 50px;
    margin-top: -57px;
    border-radius: 40px;
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
    font-family: "Poppins-ExtraBold";
    font-family: 'Poppins-Regular'
`

export const UserBank = styled.Text`
    color: lightgray;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 200;
    padding-left: 10px;
    padding-bottom: -20px;
    font-family: "Poppins-Light";
`

export const TransactionsContainer = styled(Animated.View)`
    width: 100%;
    height: 60%;
    border-radius: ${Platform.OS === "ios" ? '50px 50px 0 0': 50};
    padding: 10px 0 25px 0;
    background: ${Colors.transactionsBg};
    margin-top: -30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const LoginButtonText = styled.Text`
    color: ${Colors.white};
    font-size: 14px;
    font-family: 'Poppins-Medium'
`;