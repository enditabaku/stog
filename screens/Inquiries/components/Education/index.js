import React from 'react';
import { Image, ScrollView } from 'react-native';
import { MainContainer, 
    NewButton,
    ButtonText,
    HeaderText,
    InquiriesContainer,
    Inquiries,
    Inquiry,
    InquiryTitle,
    InquiryInfo,
    InquiryInfoText,
    InquiryInfoTextUnderlined,
    InquiryDate
} from "./styles"
import { globalStyles } from '../../../../utils/globalStyles';


const inquiries = [
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Pending",
        university: "Fakulteti i Shkencave te Natyres",
        financialInstitution: "Raifeissen Bank",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Accepted",
        university: "Fakulteti i Shkencave te Natyres",
        financialInstitution: "Raifeissen Bank",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Rejected",
        university: "Fakulteti i Shkencave te Natyres",
        financialInstitution: "Raifeissen Bank",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Pending",
        university: "Fakulteti i Shkencave te Natyres",
        financialInstitution: "Raifeissen Bank",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Accepted",
        university: "Fakulteti i Shkencave te Natyres",
        financialInstitution: "Raifeissen Bank",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Rejected",
        university: "Fakulteti i Shkencave te Natyres",
        financialInstitution: "Raifeissen Bank",
    },

]
const Education = () => {
    return (
        <MainContainer>
                <NewButton>
                    <ButtonText>
                    New Education Inquiry
                    </ButtonText>
                </NewButton>
                <InquiriesContainer style={globalStyles.darkShadow}>
                    <HeaderText>
                        My Inquiries
                    </HeaderText>
                    <Inquiries>
                        <ScrollView showsVerticalScrollIndicator={false}

                        contentContainerStyle={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
}}>
                        {
                            inquiries.map((inquiry) => (
                                <Inquiry>
                                    <InquiryDate>
                                        Applied on {inquiry.date}
                                    </InquiryDate>
                                    <InquiryTitle>
                                        {inquiry.title}
                                    </InquiryTitle>
                                    <InquiryInfo>
                                        <InquiryInfoText>
                                            University:&nbsp;
                                            <InquiryInfoTextUnderlined>
                                                {inquiry.university}
                                            </InquiryInfoTextUnderlined>
                                        </InquiryInfoText>
                                        <InquiryInfoText>
                                            Financial Institution:&nbsp;
                                            <InquiryInfoTextUnderlined>
                                                {inquiry.financialInstitution}
                                            </InquiryInfoTextUnderlined>
                                        </InquiryInfoText>
                                        <InquiryInfoText style={{color: inquiry.status == "Accepted" ? "darkgreen" : inquiry.status == "Pending" ? "darkgrey" : "red"}}>
                                            Status:&nbsp;
                                            <InquiryInfoTextUnderlined>
                                                {inquiry.status}
                                            </InquiryInfoTextUnderlined>
                                            &nbsp;
                                                {inquiry.status == "Accepted" ? "✔️" : inquiry.status == "Pending" ? "🕒" : "❌"}
                                        </InquiryInfoText>
                                    </InquiryInfo>
                                </Inquiry>
                            ))
                        }
                        </ScrollView>
                    </Inquiries>
                </InquiriesContainer>
        </MainContainer>
    );
}


export default Education;