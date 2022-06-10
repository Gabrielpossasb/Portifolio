import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import AppLoading from 'expo-app-loading';
import Modal from './Modal.js';
import App from './App.js';
import * as RootNavigation from './RootNavigation.js'

export default function Home ({navigation}, props) {

  const [showModal, setShowModal] = useState(false);
  
  
  const abrirModalContato = () =>{
    setShowModal(!showModal);
  }
  
  return (
    <View style={{flex:1}}>

      {
        (showModal)?
          <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        :
          <View></View>
      }
      
      <ScrollView contentContainerStyle={{padding:10, borderColor:'#1f306e', borderWidth:5}} 
        style={{backgroundColor:'white', flex:1,
      }}>
        <View style={{backgroundColor:'rgba(163, 129, 230,0.1)', borderColor:'#1f306e', borderWidth:3, borderRadius:5, padding:10, flex:1}}>
          <View style={{
            width:150,
            height:150, 
            marginTop:10, 
            alignSelf:'center', 
            backgroundColor:'rgba(0,0,0,0.8)', 
            borderRadius:40, 
            borderColor:'rgba(150,150,150,1)',
            borderRightWidth:4,
            borderBottomWidth:4,
          }}></View>

          <Text style={{
            alignSelf:'flex-start', 
            fontSize:24, 
            marginTop:15, 
            color:'black', 
            fontFamily: RobotoCondensed_400Regular, 
            fontWeight:'bold', 
            borderRadius:25,
            backgroundColor:'rgba(230,230,230,0.2)'
          }}>Gabriel Abraão Possas Borges</Text>

          <Text style={{fontSize:26, marginTop:20, color:'#553772'}}>
            {'Ola!! Meu nome é Gabriel Abraão e este é meu Portfólio com meus projetos, habilidades e tbm um pouco sobre min. Espero que goste : )'}
          </Text>

          <Text style={{fontSize:26, alignSelf:'center', marginTop:20, color:'#553772'}}>
            {'O que deseja ver ? :'}
          </Text>

          <View style={{alignItems:'center', marginTop:16}}>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.bntScreens} onPress={()=>RootNavigation.navigate('Sobre')}>
                <Ionicons name="ios-information-circle" size={80} color='#c7417b' />
                <Text style={styles.bntScreensText}>{'< Sobre min >'}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.bntScreens} onPress={()=>abrirModalContato()}>
                <Ionicons name="call-outline" size={80} color='#c7417b' />
                <Text style={styles.bntScreensText}>{'< Contato >'}</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.bntScreens} onPress={()=>RootNavigation.navigate('Formacao')}>
                <Ionicons name="school-outline" size={80} color='#c7417b' />
                <Text style={styles.bntScreensText}>{'< Formação >'}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.bntScreens} onPress={()=>RootNavigation.navigate('Projetos')}>
                <Ionicons name="folder-open-outline" size={80} color='#c7417b' />
                <Text style={styles.bntScreensText}>{'< Projetos >'}</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
bntScreens: {
    //backgroundColor:'rgba(205, 94, 74, 1)',
    backgroundColor:'rgba(26, 26, 26,1)',
    width:170,
    height:160,
    margin:(20, 10, 10, 10),
    borderRadius:20,
    borderColor:'rgba(150,150,150,1)',
    borderRightWidth:4,
    borderBottomWidth:4,
    padding:5,
    alignItems:'center',
    justifyContent:'center'
  }, 
  bntScreensText: {
    padding:5,
    color:'#c7417b',
    fontSize:18,
    fontFamily:BebasNeue_400Regular
  }
})