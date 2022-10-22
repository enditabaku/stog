import styled from "styled-components";
import { Colors } from "../../../../components/style";

export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 30px;
    align-items: center;
`

export const NewButton = styled.TouchableOpacity`
  padding: 5px 15px;
  width: 70%;
  background-color: ${Colors.red};
  border-radius: 1px solid ${Colors.darkred};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
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
    font-size: 32px;
    font-family: 'Poppins-Black';
    text-align: center;
`

export const Inquiries = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Inquiry = styled.View`
    border-radius: 50px;
    width: 100%;
    height: 200px;
`