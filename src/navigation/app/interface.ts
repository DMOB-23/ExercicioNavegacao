import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ResultRouteParams } from "../../screens/result"

export type AppStackParamList = {
    Form: undefined
    Result: ResultRouteParams
}

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>
