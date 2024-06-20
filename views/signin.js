import { Image, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Alert } from 'react-native';
import { AUTH } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { StyledButtonMain, styles, StyledButtonTre } from '../styles';
import { useForm, Controller } from "react-hook-form"

export const SignIn = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: "",
            mail: "",
        },
    })
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.start}>
            <TouchableWithoutFeedback onPress={(Keyboard.dismiss)}>
                <View style={styles.spaceBetwen}>
                    <View style={styles.logoStart} >
                        <Image style={styles.logoStarImg} source={require('../img/ZyCare.png')} />
                        <Text style={styles.logoStarText}>ZyCare</Text>
                    </View>
                    {error !== '' ? error === 'invalid-credential' ? <Text style={styles.errorMsg}>El email o la contrasena son incorrectos</Text> : <Text style={styles.errorMsg}>Hubo un error, vuelve a intentarlo</Text> : <></>}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="ejemplo@gmail.com"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={error !== 'invalid-credential' ? styles.TextInput : styles.TextInputError}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                autoCompleteType="email"
                                autoCapitalize="none"
                            />
                        )}
                        name="mail"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                secureTextEntry={true}
                                placeholder="• • • • • • • •"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={error !== 'invalid-credential' ? styles.TextInput : styles.TextInputError}
                            />
                        )}
                        name="password"
                    />
                    <View style={styles.hori}>
                        <StyledButtonMain disabled={loading} onPress={handleSubmit(async (data) => {
                            await setLoading(true)
                            await signInWithEmailAndPassword(AUTH, data.mail, data.password).catch((err) => {
                                console.log(err.code)
                                if (err.code === 'auth/too-many-requests') {
                                    Alert.alert('Cuenta desabilitada', 'Esta cuenta fue temporalmente desabilidata por multiples intentos de acceso', [
                                        { text: 'OK', onPress: () => { } },
                                    ]);
                                }
                                else if (err.code === 'auth/invalid-credential') {
                                    setError('invalid-credential')
                                }
                                else {
                                    setError('any')
                                }
                            })
                            await setLoading(false)

                        })}>Iniciar sesion</StyledButtonMain>
                        <StyledButtonTre>Crear cuenta</StyledButtonTre>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}