import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../Styles/style";
import { Ionicons } from '@expo/vector-icons';


export default function Areapix() {
    return (

        <View style={styles.Areapix}>

            <View style={styles.Divtitlepix}>
            <Text style={styles.txttitlepix}>
                Area pix
            </Text>
            </View>

        <View style={styles.Areapixbnts}>



            <View style={styles.Areapixbnt}>

                <View style={styles.Bntareapix}>
                    <TouchableOpacity style={styles.AreapixIcon} onPress={() => { navigation.navigate("/") }}>
                        <Ionicons name='people' size={30} color='#000' />
                    </TouchableOpacity>
                    <Text style={styles.Textbntpix}>
                        Contatos
                    </Text>
                </View>

                <View style={styles.Bntareapix}>
                    <TouchableOpacity style={styles.AreapixIcon} onPress={() => { navigation.navigate("/") }}>
                        <Ionicons name='people' size={30} color='#000' />
                    </TouchableOpacity>
                    <Text style={styles.Textbntpix}>
                       test
                    </Text>
                </View>

            </View>
        </View>
        </View>

    );
}