import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalStyles } from './contants'

const InputComponent = (props) => {
    const { placeHolder, value, onChange, styles, isPassword, textColor } = props
    return (
        <TextInput
            placeholder={placeHolder}
            value={value}
            onChangeText={onChange}
            style={styles}
            secureTextEntry={isPassword}
            placeholderTextColor={textColor ?? 'black'}
        />
    )
}

const ButtonComponent = (props) => {
    const { text, textStyle, style, backgroundColor, onPress, textColor, isIcon, icon } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style, {
                backgroundColor: backgroundColor
            }]}

        >
            {isIcon && icon}
            <Text style={[textStyle, { color: textColor ?? 'black', marginStart: isIcon ? 12 : 0 }]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const initProfile = {
    email: '',
    password: '',
    date: '',
}

const RegisterScreen = (props) => {

    const { navigation } = props

    const [profile, setprofile] = useState(initProfile)
    const handleValue = (key, value) => {
        const _profile = { ...profile }
        _profile[`${key}`] = value
        setprofile(_profile)
    }

    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')}
                style={[styles.logo, { marginTop: 60, marginBottom: 40 }]} />
            <Text style={[styles.label, { marginBottom: 16 }]}>Register</Text>
            <InputComponent
                placeHolder='Email'
                onChange={text => handleValue('email', text)}
                textColor='rgba(184, 184, 199, 1)'
                styles={styles.input}
            />
            <InputComponent
                placeHolder='Password'
                onChange={text => handleValue('email', text)}
                isPassword
                textColor='rgba(184, 184, 199, 1)'
                styles={styles.input}

            />
            <InputComponent
                placeHolder='Date of Birth'
                onChange={text => handleValue('email', text)}
                textColor='rgba(184, 184, 199, 1)'
                styles={styles.input}
            />

            <View style={styles.licence}>
                <Text style={[globalStyles.text, { marginBottom: 16 }]} numberOfLines={2}>
                    By signing up, you agree to our
                    <Text style={[styles.link]}> Terms</Text>,
                    <Text style={[styles.link]}> Data Policy</Text> and
                    <Text style={[styles.link]}> Cookies Policy</Text>.
                </Text>
            </View>

            <ButtonComponent
                text='Register'
                textColor='rgba(255, 255, 255, 1)'
                backgroundColor='rgba(72, 56, 209, 1)'
                textStyle={styles.label}
                onPress={() => navigation.navigate('TabNavigation')}
                style={styles.button}
            />
            <ButtonComponent
                text='Cancel'
                textColor='rgba(72, 56, 209, 1)'
                textStyle={styles.label}
                backgroundColor='white'
                style={styles.button}
            />
        </View >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 'auto',
        borderRadius: 8,
        backgroundColor: 'rgba(72, 56, 209, 1)',
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(72, 56, 209, 1)'
    },
    link: {
        color: 'rgba(247, 122, 85, 1)',
        fontWeight: '600'
    },
    licence: {
        width: '100%',
        paddind: 8,
        height: 'auto'
    },
    input: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(245, 245, 250, 1)',
        marginBottom: 16
    },
    label: {
        ...globalStyles.text,
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'flex-start',
    },
    logo: {
        width: 120,
        height: 120
    },
    container: {
        flex: 1,
        paddingHorizontal: 40,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export { ButtonComponent }
