import { Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { useState } from "react";

export const ViewBg = ({ children }) => {
    return (
        <View style={styles.start}>
            {children}
        </View>
    )
}

export const StyledButtonMain = ({ children, onPress, disabled }) => {
    const [press, setPress] = useState(false)

    return (
        <Pressable disabled={disabled} onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} style={press ? styles.buttonPre : styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{!disabled? children:'Cargando...'}</Text>
        </Pressable>

    )
}

export const StyledButtonTre = ({ children, onPress }) => {
    const [press, setPress] = useState(false)
    return (
        <Pressable onPressOut={() => setPress(false)} onPressIn={() => setPress(true)} style={press ? styles.buttonTrePre : styles.buttonTre} onPress={onPress}>
            <Text style={!press ? styles.buttonTreText : styles.buttonTreTextPre}>{children}</Text>
        </Pressable>

    )
}

export const styles = StyleSheet.create({
    start: {
        flex: 1,
        backgroundColor: '#F2EED8',
        padding: 15,
        justifyContent: 'center',
    },
    spaceBetwen: {
        gap: 15
    },
    logoStart: {

        marginBottom: 50,
        alignSelf: 'center'

    },
    logoStarImg: {
        alignSelf: 'center',
        width: 120,
        height: 120,
    },
    logoStarText: {
        color: '#011C40',

        fontFamily: Platform.OS === 'ios' ? 'Montserrat_700Bold' : undefined,
        fontSize: 30,
        alignSelf: 'center',

    },
    button: {
        backgroundColor: '#011C40',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 200,
        alignSelf: 'flex-start',
        borderColor: '#011C40',
        borderWidth: 5,
    },
    buttonText: {
        color: '#F2EED8',
        fontFamily: Platform.OS === 'ios' ? 'Montserrat_700Bold' : undefined,
        fontSize: 15,
    },
    buttonPre: {
        backgroundColor: '#1243A6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 200,
        alignSelf: 'flex-start',
        borderColor: '#1243A6',
        borderWidth: 5,
    },
    buttonTreText: {
        color: '#011C40',
        fontFamily: Platform.OS === 'ios' ? 'Montserrat_700' : undefined,
        fontSize: 15,

    },
    buttonTreTextPre: {
        color: '#1243A6',
        fontFamily: Platform.OS === 'ios' ? 'Montserrat_700' : undefined,
        fontSize: 15,

    },
    buttonTre: {
        alignSelf: 'center',
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#011C40',
    },
    buttonTrePre: {
        alignSelf: 'center',
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#1243A6',
    },
    TextInput: {
        borderColor: '#011C40',
        borderWidth: 5,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
        fontFamily: Platform.OS === 'ios' ? 'Montserrat_700Bold' : undefined,
        fontSize: 15,
    },
    TextInputError: {
        borderColor: '#ad3c26',
        borderWidth: 5,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
        fontFamily: Platform.OS === 'ios' ? 'Montserrat_700Bold' : undefined,
        fontSize: 15,
    },
    hori: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    errorMsg: {
        color: '#ad3c26',
        fontFamily: Platform.OS === 'ios' ? 'Montserrat_700Bold' : undefined,
        // marginLeft: 20,
        fontSize: 15,
        alignSelf: 'center'
    },
    topBarIcons: {
        width: 28,
        height: 28
    },
    
    topBarIconsToSelect: {

        width: 28,
        height: 28,
        opacity: 0.5
    }
});
