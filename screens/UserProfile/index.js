import { ImageBackground } from "react-native"
import { useEffect, useState, useContext } from "react"
import {
    MainContainer, 
    BalanceContainer, 
    UserData,
    UserName, 
    UserImage, 
    UserBank, 
    UserTitles,
    StyledButton, 
    LoginButtonText,
    TransactionsContainer,
    UpperText,
    DataText
    } from "./styles"

import { globalStyles } from "../../utils/globalStyles"
import { CredentialsContext } from "../../contexts/CredentialsContext";
import axios from 'axios';

// User can view, add, edit or delete their information from this page
const Profile = () => {

  const { storedCredentials } = useContext(CredentialsContext)
  const [userData, setUserData] = useState(null);


  const getUserData = async () => {
    try{
        const uri ='http://pragmaticsteam-001-site1.atempurl.com/api/Authentication/CurrentUser'
        const result = await axios.get(uri, {
            headers: { Authorization: `Bearer ${storedCredentials}` }
        })
        if (result.status === 200) {
            setUserData(result.data)
        }
    } catch (error){
        console.log(error.response)
    }
}
  
  useEffect(() => {
    getUserData()
  }, [])

    return (
        <MainContainer>
            <BalanceContainer>
            <ImageBackground
                source={require("../../assets/images/bgbg-01.png")}
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
                      source={require("../../assets/images/user.png")}
                    />
                    <UserTitles>
                    <UserBank> Welcome</UserBank>
                    <UserName> {userData?.fullName} </UserName>
                    <UserBank> This is your space</UserBank>
                    </UserTitles>
                </UserData>
            <TransactionsContainer style={globalStyles.imageShadow}>
            <ImageBackground
                  source={require("../../assets/images/userprofile-01.png")}
                  style={{
                      width: "100%",
                      height: "100%"
                    }}
                    imageStyle={{ borderRadius: 20}}
                  >
                    <>
                      <DataText></DataText>
                      <UpperText>Username: </UpperText><DataText>{userData?.userName}</DataText>
                      <UpperText>FirstName: </UpperText><DataText>{userData?.firstName}</DataText>
                      <UpperText>LastName: </UpperText><DataText>{userData?.lastName}</DataText>
                      <UpperText>Email: </UpperText><DataText>{userData?.email}</DataText>
                      <UpperText>Phone Number: </UpperText><DataText>+355 68 10 10 000</DataText>
                      {/* <UpperText>Institution: </UpperText><DataText>Tirana University</DataText> */}
                      <StyledButton>
                          <LoginButtonText>Edit Profile</LoginButtonText>
                      </StyledButton>
                      <DataText></DataText>
                    </>
              </ImageBackground>
            </TransactionsContainer>
            </ImageBackground>
            </BalanceContainer>
        </MainContainer>
    )
}

export default Profile