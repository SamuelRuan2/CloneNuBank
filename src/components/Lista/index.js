import * as React from 'react';
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native';

const data = [
    { id: '1', title: 'Gabriel Lima', image: require("../img/gabriel.jpeg") },
    { id: '2', title: 'Jennifer Cristina', image: require('../img/jennifer.jpeg') },
    { id: '3', title: 'Jonas Paulino', image: require('../img/jonas.jpeg') },
    { id: '4', title: 'Juely Menezes', image: require('../img/juely.jpeg') },
    { id: '5', title: 'Gabriel Luiz', image: require('../img/luiz.jpeg') },
    { id: '6', title: 'Prof. Rafael', image: require('../img/rafael.jpeg') },
    { id: '7', title: 'Samuel Ruan', image: require('../img/samuel.jpeg') },
    { id: '8', title: 'Valdênio', image: require('../img/valdenio.jpeg') },
  ];

 const renderItem = ({ item }) => (
    <View style={{ padding: 10,flexDirection:"row",alignItems:"center" }}>
      <Image source={item.image} style={{ width: 60, height: 60, marginRight:10, borderRadius:30}} />
      <Text style={{fontWeight:'bold',color:"#FFFFFF"}}>{item.title}</Text>
    </View>
  );

export default function Lista({ navigation }) {
    return (
          
            <FlatList
            style={{height:"80vh",width:"80vw"}}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, alignSelf:"center",color:"#FFFFFF" }}>Contatos</Text>}
            />
    
    );
}