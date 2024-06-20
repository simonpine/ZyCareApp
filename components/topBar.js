import { Image, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Constants from 'expo-constants'
import { styles } from '../styles';

export const TopBar = () => {
    return (
        <View style={{ paddingTop: Constants.statusBarHeight+ 20, backgroundColor: '#F2EED8', flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
            <Image style={styles.topBarIcons} source={require('../img/ZyCare.png')} />
            <Image style={styles.topBarIcons} source={require('../img/bells.png')} />
        </View>
    )
}