import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E4E4',
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: "center",
    },
    input: {
        height: 50,
        width: '95%',
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8,
    },
    list: {
      flex: 1,
      width: '100%',
      marginTop: 16,
      marginBottom: 16,
    },
    item : {
      justifyContent: 'center',
      alignItems: "center",
      height: 60,
      flexDirection: "row",
      paddingLeft: 16,
      paddingRight: 8,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#999'
    },
    item_text: {
      fontWeight: 'bold',
    },
    item_detail: {
      fontWeight: 'bold',
      fontSize: 20,
    }
})