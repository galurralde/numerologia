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
        width: '70%',   
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 20,        
        paddingVertical: 20,
    },
    input:{
        //width: '100%',
        //borderBottomColor: colors.primary,
        //borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',     
        width: '70%',
        justifyContent: 'space-around',
        marginTop: 20,

    },
    confirmedContainer:{
        width: '70%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 30,
        borderRadius: 5,
    },
    confirmedTitle:{
        fontSize: 16,
        
    },
    confirmedNumber:{
        fontSize: 22,
        fontWeight: 'bold',

    },

});