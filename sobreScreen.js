import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Sobre({navigation}) {

    return (
      <View style={{flex:1}}>
  
        <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>
         
          <Text style={styles.textHeader}>Para onde você deseja navegar?</Text>
  
          <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.btnNavigation}>
            <Ionicons name="md-home" size={29} color='white' />
            <Text style={{color:'white',marginTop:8,marginLeft:8}}>Home</Text>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={()=>navigation.navigate('Sobre')} style={styles.btnNavigation}>
            <Ionicons name="ios-information-circle" size={29} color='white' />
            <Text style={{color:'white',marginTop:8,marginLeft:8}}>Sobre</Text>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={()=>navigation.navigate('Portifolio')} style={styles.btnNavigation}>
            <Ionicons name="ios-list" size={29} color='white' />
            <Text style={{color:'white',marginTop:8,marginLeft:8}}>Portfólio</Text>
          </TouchableOpacity>
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
})