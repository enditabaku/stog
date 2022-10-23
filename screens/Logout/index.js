import { useEffect } from "react"
import { Text } from "react-native"

const Logout = () => {

    // Removes creds from storage, thus logging the user out
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