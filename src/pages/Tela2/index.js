import { View, Text } from "react-native";
import Navbar from "../../components/Navbar";



export default function Tela2() {
    return (
        <View>


            <Text>
                ASDSDFSF
            </Text>
            <button>
                asd
            </button>

            <View style={{
                flexDirection: "row",
                justifyContent: "center", position: "fixed", alignSelf: "center"
            }}>
                <Navbar />
            </View>
        </View>

    );
}