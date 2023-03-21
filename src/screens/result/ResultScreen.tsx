import { Text, View } from "react-native"
import useResult from "./hook/useResult"

const ResultScreen = () => {
    const { name, email } = useResult()

    return (
        <View>
            <Text>Seja bem-vindo!</Text>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    )
}

export default ResultScreen