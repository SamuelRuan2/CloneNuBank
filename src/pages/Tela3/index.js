import { SafeAreaView, View } from "react-native";
import Styles from "../../Styles/style";
import Lista from "../../components/Lista/";
import Navbar from "../../components/Navbar";




export default function Tela3() {
    return (
        <View>
           

                <View style={Styles.backgroundtela3}>
                    <Lista/>
                </View>


            <View style={{
                flexDirection: "row",
                justifyContent: "center", position: "fixed", alignSelf: "center"
            }}>
                <Navbar />
            </View>

        </View>
    );
}