import { useEffect } from "react"
import { Text } from "react-native"
import { MainContainer } from "../../components/style"

const Logout = () => {

    useEffect(async () => {
        await AsyncStorage.removeItem('credentials')
            .then(() => {
                goToPage('Welcome');
            })
            .catch((error) => {
                console.log(error);
            });
    },[])

    return (
       <>
         <Text>Success logout</Text>
       </>
    )
}

export default Logout;