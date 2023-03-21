import { Button, Text, TextInput, View } from "react-native"
import useForm from "./hook/useForm"

const FormScreen = () => {
 
    const { setName, setEmail, goToResult } = useForm()    

    return (
        <View>
            <Text>Nome</Text>
            <TextInput onChangeText={setName} />

            <Text>E-mail</Text>
            <TextInput onChangeText={setEmail} />

            <Button title="Enviar" onPress={goToResult} />
        </View>
    )
}

export default FormScreen