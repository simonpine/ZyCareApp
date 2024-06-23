import MapView, { Marker } from 'react-native-maps';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

const marks = [{ NombreHospital: 'Clínica del Country', LinkDeUnaImagen: 'https://acreditacionensalud.org.co/wp-content/uploads/2020/07/Clínica-del-Country.jpg', especialidadDelHospital: 'Oncologia', longitud: 4.66922742084761, latitud: -74.05666557475018 }, { NombreHospital: 'Fundacion SantaFe de Bogota', LinkDeUnaImagen: 'https://www.ectricol.com/wp-content/uploads/2020/05/BANNER-FUNDACION-SANTAFE.jpg', especialidadDelHospital: 'Anestesiologia', longitud: 4.695840269002551, latitud: -74.03265782009395 }, { NombreHospital: 'Clinica los Nogales', LinkDeUnaImagen: 'https://lh5.googleusercontent.com/p/AF1QipPWqfVBvfSdoeCU4-n2PvjPQrJ12fxQQ32aQy5d=w408-h306-k-no', especialidadDelHospital: 'Tratamiento del Dolor', longitud: 4.682961155783344, latitud: -74.05715047116485 }, { NombreHospital: 'Hospital Universitario San Ignacio', LinkDeUnaImagen: 'https://lh5.googleusercontent.com/p/AF1QipMNFZiti_WEIueLVcOSmlBgUSW2TDm3WWX57uxV=w408-h306-k-no', especialidadDelHospital: 'Medicina Interna', longitud: 4.629207254492234, latitud: -74.06478268650548 }, { NombreHospital: 'Hospital Universitario Mayor Mederi', LinkDeUnaImagen: 'https://lh5.googleusercontent.com/p/AF1QipM-wgIPHe9z7UZ22q6RM34K1Vg7yMOxhPwcgBHj=w408-h240-k-no', especialidadDelHospital: 'Radiologia', longitud: 4.623593595056923, latitud: -74.08263059815387 }, { NombreHospital: 'Fundacion Cardio Infantil', LinkDeUnaImagen: 'https://www.infobae.com/new-resizer/ZKFRE36W_c-Ay0gZ6Knkq9Y-FsQ=/1440x960/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/GSPHIU4GLFEQZDRHHDWVLRIX6Y.jpg', especialidadDelHospital: 'Cardiologia', longitud: 4.741540058386949, latitud: -74.03452110081817 }]

export const Map = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <MapView initialRegion={{
                latitude: 4.707393846178898, longitude: -74.06045583958088, latitudeDelta: 0.025,
                longitudeDelta: 0.0321,
            }} style={{ width: "100%", height: "100%" }}>

                {marks.map(item => {
                    return (
                        <Marker key={item.NombreHospital}
                            coordinate={{ latitude: item.longitud, longitude: item.latitud }}
                        // description={"This is a marker in React Natve"}
                        ><View style={{flexDirection:'row', backgroundColor: '#011C40', borderRadius: 10}}>
                                <Image style={{ width: 60, height: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} source={{ uri: item.LinkDeUnaImagen }} />
                                <View style={{margin: 10}}>
                                    <Text style={{color:'#F24822', fontFamily: 'Montserrat_700Bold'}}>{item.NombreHospital}</Text>
                                    <Text style={{color:'#F2EED8', fontFamily: 'Montserrat_500Medium'}}>Especialidad: {item.especialidadDelHospital}</Text>
                                </View>
                            </View>
                        </Marker>
                    )
                })}
                {/* <Text>Hola</Text> */}
            </MapView>
        </View>
    );
}