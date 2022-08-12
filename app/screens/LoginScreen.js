import React from 'react';
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

function LoginScreen(props) {


    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(4).label('Password'),
    })
    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <AppForm 
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    name="email"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    name="password"
                />
                <SubmitButton title="Login" color="primary" /> 
            </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;