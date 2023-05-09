import { Image, View } from 'react-native';
import {Link} from 'react-router-dom';
import Styles from "../../Styles/style";


export default function Navbar() {  
    
    return (
        
           
            <View style={Styles.footer }>

                
                <Link style={Styles.itensFooter} to="/"> <Image style={Styles.iconsFooter} source={require("../img/transferencia.png")} /></Link> 
                

                <Link  style={Styles.page2} to="/Tela2"> <Image style={Styles.iconsFooter} source={require("../img/cifrao.png")} /></Link>   


                <Link style={Styles.itensFooter} to="/Tela3"> <Image style={Styles.iconsFooter} source={require("../img/sacola.png")} /></Link>   
            </View>
            
               

             
      
    );
}