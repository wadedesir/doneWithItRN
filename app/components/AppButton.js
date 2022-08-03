import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../config/colors";

const AppButton = ({title, color, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.container, backgroundColor: Colors[color]}}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        marginBottom: 20,
    },
    text: {
        textAlign: "center",
        color: Colors.white,
        fontSize: 20,
        fontWeight: "500",
        textTransform: "uppercase",
    }
})

export default AppButton;