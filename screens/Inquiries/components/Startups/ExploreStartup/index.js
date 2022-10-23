import {MainContainer, MainHeader, Dates, Company, Description} from "./styles"
import { ImageBackground } from "react-native"

const project =     {
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
}

const ExploreStartup = (props) => {

    return (
        <MainContainer>
            <ImageBackground
                source={require("../../../../../assets/images/header.png")}
                style={{
                    width: "100%",
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  imageStyle={{ borderRadius: 40}}
                >
                <MainHeader>
                    {project.title}
                </MainHeader>
                <Company>
                    Made available by {project.institution.name}
                </Company>
                </ImageBackground>

            <Dates></Dates>
            <Dates>
                Starts: {project.startDate}
            </Dates>
            <Dates>
            Ends: {project.endDate}
            </Dates>
            <Dates>
            Estimated: {project.estimatedTimePeriodMonths} months.
            </Dates>
            <Dates></Dates>
            <Description>
                {project.description}
            </Description>
        </MainContainer>
    )
}

export default ExploreStartup