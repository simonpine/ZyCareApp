import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AUTH } from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect, useCallback } from 'react';
import { StyledButtonMain, ViewBg, styles, StyledButtonTre } from './styles';
import { SignIn } from './views/signin';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants'

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import { TopBar } from './components/topBar';
// import { useState } from 'react';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Casa!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const auth = AUTH
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (a => setUser(a)))
  }, [])
  const signIn = async (data) => {
    console.log(data)
    // await signInWithEmailAndPassword(auth, 'simonpineda0521@gmial.com', 'Simonp21')
  }
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  }); return (
    <>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        {!user ?
          <>
            <TopBar />
            <Tab.Navigator screenOptions={({ route }) => ({
              // headerShown: false,
              tabBarStyle: {
                height: 95,
                // paddingHorizontal: 5,

                backgroundColor: '#011C40',
                paddingBottom: 30
              },
              
              tabBarIcon: ({ focused }) => {


                if (route.name === 'Hospitales') {
                  return <Image style={focused? styles.topBarIcons: styles.topBarIconsToSelect} source={require(`./img/hospital.png`)} />;
                }
                else if (route.name === 'Emergencias'){
                    return <Image style={focused? styles.topBarIcons: styles.topBarIconsToSelect}source={require(`./img/bone-break.png`)} />;
                }
                return <Image style={focused? styles.topBarIcons: styles.topBarIconsToSelect} source={require(`./img/people-roof.png`)} />;
              },
              tabBarLabel: ({focused, color, size}) => (
                <Text style={{color: focused ? '#F2EED8' : color, fontFamily: 'Montserrat_500Medium', fontSize:13}}>{route.name}</Text>
              ),
            })}>
              <Tab.Screen options={{ headerShown: false }} name="Familia" component={HomeScreen} />
              <Tab.Screen options={{ headerShown: false }} name="Emergencias" component={HomeScreen} />
              <Tab.Screen options={{ headerShown: false }} name="Hospitales" component={SettingsScreen} />
            </Tab.Navigator>
          </>
          :
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
            {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
          </Stack.Navigator>
        }
      </NavigationContainer>
    </>
  );
}

