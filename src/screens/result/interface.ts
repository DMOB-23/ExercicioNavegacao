import { RouteProp } from "@react-navigation/native"
import { AppStackParamList } from "../../navigation/app/interface"

export type ResultRouteParams = {
    name: string,
    email: string,
}

export type ResultRouteProp = RouteProp<AppStackParamList, 'Result'>
