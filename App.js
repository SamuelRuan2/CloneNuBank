import Home from './src/pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { View } from 'react-native';
import styles from "./src/Styles/style"
import Tela2 from "./src/pages/Tela2"
import Tela3 from './src/pages/Tela3/'
import Areapix from './src/pages/Areapix';


export default function App() {
  return (
    <Router >
      
<View style={styles.flexColum}>

      
       
       <Routes >
 
           <Route style={styles.header} exact path="/"element={<Home/>}  />
           
 
           <Route exact path="/Tela2"element={<Tela2/>} />
 
           <Route style={{width:"100%"}} exact path="/Tela3"element={<Tela3/>} />
         
            <Route exact path='/areapix' element={<Areapix/>}/>
 
       </Routes>
       
    
       
       
       </View>

 

    </Router>
    
  );
}