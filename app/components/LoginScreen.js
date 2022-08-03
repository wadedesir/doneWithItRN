import React from 'react';
import { StyleSheet, Image } from 'react-native'
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';
import { Formik } from 'formik';

import Screen from './Screen';

function LoginScreen(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <Formik 
                initialValues={{ email, password }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleSubmit}) => (
                    <>
                        <AppTextInput 
                            icon="email"
                            placeholder="Email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="emailAddress"
                            onChangeText={handleChange('email')}
                        />
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            onChangeText={handleChange('password')}
                        />

                        <AppButton 
                            title="Login"
                            color={'primary'}
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            
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