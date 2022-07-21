import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({title, color}) => {
    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: colors[color]}}>
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
        color: colors.white,
        fontSize: 20,
        fontWeight: "500",
        textTransform: "uppercase",
    }
})

export default AppButton;