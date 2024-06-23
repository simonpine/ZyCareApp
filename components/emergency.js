import { View, Text, Image, ScrollView, Pressable } from "react-native"
export const Emergency = () => {
    return (
        <ScrollView style={{
            flex: 1, padding: 20, backgroundColor: '#F2EED8', rowGap: 16
        }}>
            <Pressable style={{ backgroundColor: '#011C40', borderRadius: 20, overflow: 'hidden' }}>
                <View style={{ paddingHorizontal: 30, paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}><Image style={{ width: 25, height: 25 }} source={require('../img/legumbres.png')} /><Text style={{ color: '#F2EED8', fontFamily: 'Montserrat_700Bold', fontSize: 20 }}>Evaluacion medica</Text></View>

                <Image style={{ width: '100%', height: 150, opacity: 0.7 }} source={require('../img/photo1.jpg')} />
            </Pressable>
            <View style={{ height: 20 }}></View>
            <Pressable style={{ backgroundColor: '#011C40', borderRadius: 20, overflow: 'hidden' }}>
                <View style={{ paddingHorizontal: 30, paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}><Image style={{ width: 25, height: 25 }} source={require('../img/ambulancia.png')} /><Text style={{ color: '#F2EED8', fontFamily: 'Montserrat_700Bold', fontSize: 20 }}>Linea de emergencia</Text></View>

                <Image style={{ width: '100%', height: 150, opacity: 0.7 }} source={require('../img/photo2.jpg')} />
            </Pressable>
        </ScrollView>
    )
}