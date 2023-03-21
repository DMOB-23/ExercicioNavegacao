import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { AppNavigationProp } from "../../../navigation/app"
import { UseFormResult } from "./interface"

const useForm = (): UseFormResult => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigation = useNavigation<AppNavigationProp>()

    const goToResult = () => {
        navigation.navigate("Result", { name, email })
    }
    
    return {
        setName,
        setEmail,
        goToResult,
    }
}

export default useForm