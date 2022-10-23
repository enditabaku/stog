import styled from "styled-components";
import { Colors } from "../../../../../components/style";

export const MainContainer = styled.View`
    width: 100%;
    height: 100%;
    background: ${Colors.transactionsBg};
    margin: 20px 10px;
    margin-top: 50px;
    padding: 10px 20px;
`

export const MainHeader = styled.Text`
    font-size: 32px;
    font-family: "Poppins-ExtraBold";
    color: ${Colors.white}
`

export const Dates = styled.Text`
    font-family: "Poppins-Regular";
    font-size: 13px;
    color: slategrey;
`

export const Company = styled.Text`
    font-size: 14px;
    font-family: "Poppins-ExtraBold";
    color: skyblue;
`

export const Description = styled.Text`
    font-size: 16px;
    font-family: "Poppins-Regular";
`