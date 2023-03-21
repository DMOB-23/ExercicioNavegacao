import { useRoute } from "@react-navigation/native";
import { ResultRouteProp } from "../interface";
import { UseResultResult } from "./interface";

const useResult = (): UseResultResult => {
    const { params } = useRoute<ResultRouteProp>()

    return {
        name: params.name,
        email: params.email,
    }
}

export default useResult
