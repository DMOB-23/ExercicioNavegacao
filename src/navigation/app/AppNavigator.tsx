import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FormScreen } from "../../screens/form"
import { ResultScreen } from "../../screens/result"
import { AppStackParamList } from "./interface"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Form"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#333333' },
                statusBarColor: '#212121',
            }}>

            <Stack.Screen name="Form" component={FormScreen}
                options={{ title: 'Dados do Usuário' }} />
            <Stack.Screen name="Result" component={ResultScreen}
                options={{
                    title: 'Resultado',
                    headerStyle: { backgroundColor: 'red' },
                    statusBarColor: 'red'
                }} />
        </Stack.Navigator>
    )
}

export default AppNavigator