import styled from "styled-components";
import { Colors } from "../../../../../components/style";
import Education from "../../Education";

export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    background: ${Colors.transactionsBg};
    display: flex;
    padding: 50px 10px 20px 10px;
    align-items: center;
`

export const MainHeader = styled.Text`
    font-size: 38px;
    font-family: "Poppins-ExtraBold";
`

export const StartupsContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const StartupContainer = styled.View`
    width: 100%;
    padding: 15px 25px 15px 25px;
    background: ${Colors.lightGreen};
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;
    border-radius: 20px;
`

export const StartupDates = styled.Text`
    font-size: 14px;
    color: slategrey;
    font-family: "Poppins-ExtraLight";
`

export const StartupTitle = styled.Text`
    font-size: 24px;
    font-family: "Poppins-ExtraBold";
`

export const StartupCompany = styled.Text`
    font-size: 12px;
    font-family: "Poppins-Light";
    margin-bottom: 13px;
`

export const StartupDescription = styled.Text`
    font-size: 16px;
    font-family: "Poppins-Regular";
    color: darkslategrey;
`

export const ButtonsContainer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
export const LearnMoreButton = styled.TouchableOpacity`
    padding: 15px 10px;
    background-color: ${Colors.red};
    border: 1px solid ${Colors.darkred};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-family: 'Poppins-Medium';
    margin: 10px 0;
    width: 45%;
`;

export const LearnMoreButtonText = styled.Text`
    font-family: "Poppins-Regular";
    color: ${Colors.white}
`