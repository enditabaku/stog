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