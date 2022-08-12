import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';


function RegisterScreen(props) {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(2).label('Name'),
        email: Yup.string().required().email().label('Email'),
        password: Yup.string().required().min(4).label('Password'),
    })

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    name="name" 
                    icon="name" 
                    placeholder="Name" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="name"
                />
                <AppFormField 
                    name="email" 
                    icon="email" 
                    placeholder="Email" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                />
                <AppFormField 
                    name="password"
                    icon="password"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                />
                <SubmitButton title="Register" color="primary" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    }
})
export default RegisterScreen;