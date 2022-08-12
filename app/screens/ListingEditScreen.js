import React from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPicker,  SubmitButton } from '../components/forms';
import colors from '../config/colors';

let categories = [
    { id: 1, label: 'Furniture', icon: 'floor-lamp', color: colors.floorLamp },
    { id: 2, label: 'Cars', icon: 'car', color: colors.car },
    { id: 3, label: 'Cameras', icon: 'camera', color: colors.camera },
    { id: 4, label: 'Games', icon: 'cards', color: colors.cards },
    { id: 5, label: 'Clothing', icon: 'shoe-heel', color: colors.shoeHeel },
    { id: 6, label: 'Sports', icon: 'basketball', color: colors.basketball },
    { id: 7, label: 'Music', icon: 'headphones', color: colors.headphones },
  ]

function ListingEditScreen(props) {
const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
})

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{title: '', price: '', description: '', category: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    name="title"
                    placeholder="Title"
                    maxLength={255}
                />
                <AppFormField 
                    name="price"
                    placeholder="Price"
                    KeyboardType="numeric"
                    maxLength={8}
                    width={{width: '33%'}}
                />
                <AppFormPicker 
                    name="category"
                    placeholder="Category"
                    items={categories}
                    width={{width: '50%'}}
                    // onSelectItem={(item) => console.log(item)}
                />
                <AppFormField 
                    name="description"
                    placeholder="Description"
                    multiLine
                    numberOfLines={3}
                />
                <SubmitButton title="Post" color="primary"/>
            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default ListingEditScreen;