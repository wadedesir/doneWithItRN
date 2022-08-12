import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';


function AppFormPicker({ name, onSelectItem, selectedItem, ...otherProps }) {
    const { setFieldTouched, errors, touched, setFieldValue, values } = useFormikContext();

    return (
        <>
            <AppPicker
                {...otherProps}
                onBlur={() => setFieldTouched(name)}
                onSelectItem={item => setFieldValue(name, item)}
                selectedItem={values.category}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;