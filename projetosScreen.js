import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function Projetos({navigation}) {
    const [images, setImages] = useState([
      {
        img: require('./assets/Screenshot_1.png'),
        width:0,
        height:0,
        ratio:0,
      },
      {
        img: require('./assets/Screenshot_2.png'),
        width:0,
        height:0,
        ratio:0,
      },
    ])
  
    const [windowWidth,setWindowWidth] = useState(0);
  
    useEffect(() => {
  
      let windowWidthN = Dimensions.get('window').width;
  
      setWindowWidth(windowWidthN - 30 - 40);
  
    }, [])
    
  
    const abrirNavegador = async () => {
      alert('Funcionou');
    }
  
  
    return (
      <View style={{padding:15,flex:1}}>
        <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>
          
           {
             images.map(function(val){
                return (
                  <View style={styles.parentImage}>
                    <Image style={{width:windowWidth,height:300,resizeMode:'stretch'}} source={val.img}/>
  
                    <TouchableOpacity onPress={() => abrirNavegador()} 
                    style={{width:windowWidth, padding:10, backgroundColor:'#5f5380',}}>
  
                      <Text style={{textAlign:'center',color:'white',fontSize:18}}>Abrir no navegador!</Text>
                    </TouchableOpacity>
  
                  </View>
                )
             })
           }
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'white'
    },
    textHeader:{
      color:'#5f5380',
      fontSize:24
    },
    btnNavigation:{
      backgroundColor:'#5f5380',
      padding:20,
      marginTop:15,
      flexDirection:'row'
    },
    parentImage:{
      marginTop:30
    },
})