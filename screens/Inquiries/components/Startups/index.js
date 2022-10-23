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
//navigation
import { useNavigation } from '@react-navigation/native';


const inquiries = [
    {
        title: "React App",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Pending",
        budget: "5,000,000.00 LEK",
        financialInstitution: "Raifeissen Bank",
    },
    {
        title: "World Hunger",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Accepted",
        budget: "5,000.00 LEK",
        financialInstitution: "BKT",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Rejected",
        budget: "5,000.00 LEK",
        financialInstitution: "Raifeissen Bank",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Pending",
        budget: "5,000.00 LEK",
        financialInstitution: "Alpha Bank",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Accepted",
        budget: "5,000.00 LEK",
        financialInstitution: "OTP Albania",
    },
    {
        title: "Lorem Ipsum",
        duration: "5 yrs",
        date: "24/03/2022",
        status: "Rejected",
        budget: "5,000.00 LEK",
        financialInstitution: "Raifeissen Bank",
    },

]
const StartUps = () => {
    const navigation = useNavigation();
    return (
        <MainContainer>
                <NewButton onPress={navigation.push("NewInquiry")}>
                    <ButtonText>
                    New Startup
                    </ButtonText>
                </NewButton>
                <InquiriesContainer style={globalStyles.darkShadow}>
                    <HeaderText>
                        My Startups
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
                            inquiries.map((inquiry, i) => (
                                <Inquiry key={i}>
                                    <InquiryDate>
                                        Applied on {inquiry.date}
                                    </InquiryDate>
                                    <InquiryTitle>
                                        {inquiry.title}
                                    </InquiryTitle>
                                    <InquiryInfo>
                                        <InquiryInfoText>
                                            Budget:&nbsp;
                                            <InquiryInfoTextUnderlined>
                                                {inquiry.budget}
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


export default StartUps;