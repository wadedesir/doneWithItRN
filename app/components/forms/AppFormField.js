import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';

function AppFormField({name, width, ...otherProps}) {
    const {handleChange, touched, errors,  setFieldTouched, } = useFormikContext();
    
    return (
        <>
            <AppTextInput 
                width={width}
                {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;