import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

const Button = (props) => {
    return (
        <View 
            style={{...styles.container, backgroundColor: props.color == 'primary' ? colors.primary : colors.secondary}}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 320,
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

export default Button;