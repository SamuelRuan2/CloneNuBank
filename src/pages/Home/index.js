import { View } from 'react-native';
import CardCartaoCredito from '../../components/CardCartaoCredito';
import Navbar from "../../components/Navbar/index"
import CardMeusCartoes from '../../components/CardMeusCartoes';
import Header from '../../components/Header';
import styles from './style';
import { useState } from 'react';

export default function Home() {
  const saldo = useState(9999.99);
  return (
    <View style={styles.container}>

      <Header saldo={saldo}/>

      <View style={styles.CardMeusCartoesView}>
        <CardMeusCartoes/>
      </View>

      <View style={styles.BorderSeparetion}></View>

      <CardCartaoCredito/>

      <View style={{flexDirection:"row",
        justifyContent:"center",position:"fixed",alignSelf:"center"}}>
      <Navbar/>
      </View>

    </View>
  );
}
