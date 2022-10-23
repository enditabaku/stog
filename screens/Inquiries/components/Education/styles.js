import styled from "styled-components";
import { Colors } from "../../../../components/style";

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