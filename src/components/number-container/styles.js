import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.secundary,
        borderWidth: 2,
        borderRadius: 5,
    },
    number: {
        fontSize: 22,
        fontWeight: 'bold',
    }
})