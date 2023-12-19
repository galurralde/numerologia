import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 15,
    },
    title:{
        fontSize: 18,
        color: colors.primary,
        textAlign: 'center',
        paddingVertical: 20,

    },
    label:{
        fontSize: 15,
        color: colors.text,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputContainer:{        
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 20,        
        paddingVertical: 20,
    },
    input:{
        width: '100%',
        //borderBottomColor: colors.primary,
        //borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',     
        width: '73%',
        justifyContent: 'space-around',
        marginTop: 20,

    }

});