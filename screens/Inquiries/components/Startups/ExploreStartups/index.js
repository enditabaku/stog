import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { MainContainer,
    MainHeader,
    StartupsContainer,
    StartupContainer,
    StartupDates,
    StartupTitle,
    StartupCompany,
    StartupDescription,
    LearnMoreButton,
    ButtonsContainer,
    LearnMoreButtonText,
} from "./styles"

import { useNavigation } from '@react-navigation/native';

const startupProjects = [
    {
        id: "12312312353",
        title: "React App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        startDate: "27/06/2022",
        endDate: "29/06/2023",
        estimatedTimePeriodMonths: 12,
        institutionId: "13098123",
        institution: {
            id: "13098123",
            name: "Raifeissen Bank",
            description: "One of the biggest banks in Albania, operating worldwide.",
            websiteUrl: "raifeissenbank.al",
            nuis: "T23423452342A",
            email: "support@raifeissen.al",
            phoneNumber: "077 837 7743"
        },
        budget: 19000,
        requirementFileId: "312312",
    },
    {
        id: "12312312353",
        title: "React App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        startDate: "27/06/2022",
        endDate: "29/06/2023",
        estimatedTimePeriodMonths: 12,
        institutionId: "13098123",
        institution: {
            id: "13098123",
            name: "Raifeissen Bank",
            description: "One of the biggest banks in Albania, operating worldwide.",
            websiteUrl: "raifeissenbank.al",
            nuis: "T23423452342A",
            email: "support@raifeissen.al",
            phoneNumber: "077 837 7743"
        },
        budget: 19000,
        requirementFileId: "312312",
    },
    {
        id: "12312312353",
        title: "React App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        startDate: "27/06/2022",
        endDate: "29/06/2023",
        estimatedTimePeriodMonths: 12,
        institutionId: "13098123",
        institution: {
            id: "13098123",
            name: "Raifeissen Bank",
            description: "One of the biggest banks in Albania, operating worldwide.",
            websiteUrl: "raifeissenbank.al",
            nuis: "T23423452342A",
            email: "support@raifeissen.al",
            phoneNumber: "077 837 7743"
        },
        budget: 19000,
        requirementFileId: "312312",
    },
    {
        id: "12312312353",
        title: "React App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        startDate: "27/06/2022",
        endDate: "29/06/2023",
        estimatedTimePeriodMonths: 12,
        institutionId: "13098123",
        institution: {
            id: "13098123",
            name: "Raifeissen Bank",
            description: "One of the biggest banks in Albania, operating worldwide.",
            websiteUrl: "raifeissenbank.al",
            nuis: "T23423452342A",
            email: "support@raifeissen.al",
            phoneNumber: "077 837 7743"
        },
        budget: 19000,
        requirementFileId: "312312",
    },
]

const ExploreStartups = () => {

    const navigation = useNavigation();

    return (
        <MainContainer>
            <MainHeader>
                Explore Startups
            </MainHeader>
            <StartupsContainer>
                <ScrollView showsVerticalScrollIndicator={false}>

                {
                    startupProjects.map((startupProject, i) => (
                        <StartupContainer key={i}>
                            <StartupDates>
                                {startupProject.startDate} - {startupProject.endDate} | {startupProject.estimatedTimePeriodMonths} months. 
                            </StartupDates>
                            <StartupTitle>
                                {startupProject.title}
                            </StartupTitle>
                            <StartupCompany>
                                {startupProject.institution.name}
                            </StartupCompany>
                            <StartupDescription>
                                {startupProject.description.substring(0, 200)}...
                            </StartupDescription>
                            <ButtonsContainer>

                            <LearnMoreButton> 
                                <LearnMoreButtonText onPress={() => navigation.push("ExploreStartup", {id: startupProject.id})}>
                                    Learn More
                                </LearnMoreButtonText>
                            </LearnMoreButton>
                            
                            <LearnMoreButton> 
                                <LearnMoreButtonText onPress={() => navigation.push("Apply", {id: startupProject.id})}>
                                    Apply Now
                                </LearnMoreButtonText>
                            </LearnMoreButton>
                            </ButtonsContainer>
                        </StartupContainer>
                    ))
                }
                </ScrollView>
            </StartupsContainer>
        </MainContainer>
    )
}

export default ExploreStartups