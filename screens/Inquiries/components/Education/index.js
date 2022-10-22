import React from 'react';
import { View, Text } from 'react-native';
import { MainContainer, NewButton, ButtonText, HeaderText, InquiriesContainer, Inquiries, Inquiry } from "./styles"
import { globalStyles } from '../../../../utils/globalStyles';


const inquiries = [
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Pending"
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Accepted"
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Rejected"
    },
]
const Education = () => {
    return (
        <MainContainer>
                <NewButton>
                    <ButtonText>
                    New Inquiry
                    </ButtonText>
                </NewButton>
                <InquiriesContainer style={globalStyles.darkShadow}>
                    <HeaderText>
                        My Inquiries
                    </HeaderText>
                    <Inquiries>
                        {
                            inquiries.map((inquiry) => {
                                <Inquiry style={{backgroundColor: inquiry.status == "Accepted" ? 'lightgreen' : inquiry.status == "Pending" ? "lightgray" : "red"}}>
                                    <Text>
                                        {inquiry.title}
                                    </Text>
                                </Inquiry>
                            })
                        }
                    </Inquiries>
                </InquiriesContainer>
        </MainContainer>
    );
}


export default Education;