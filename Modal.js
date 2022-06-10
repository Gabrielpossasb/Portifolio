import * as React from 'react';
import {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { db } from './firebase.js';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Modal(props){

    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    
    const enviarMensagem = () => {
        db.collection('contato').add({
            nome: nome,
            mensagem: mensagem
        })
        alert('Mensagem enviada!:)');
        setNome('');
        setMensagem('');
    }

    return(
        <View style={styles.modalParent}>
            <View style={styles.boxModal}>

                <View style={{ alignItems:'flex-start', marginVertical:(10, 10), padding:10}}>
                    <Text style={{}}>{`WhatshApp/Cel: (67) 9 9935-9933`}</Text> 
                    <Text>{`Linkedin: www.linkedin.com/in/gabriel-borges-p`}</Text>
                    <Text>{`GitHub: https://github.com/Gabrielpossasb`}</Text>
                    <Text>{`Gmail: gabrielpossasb@gmail.com`}</Text>
                </View>
                
                <TouchableOpacity onPress={() => props.setShowModal(!props.showModal)}
                    style={{ justifyContent:'center', alignItems:'center', right:10, top:10, position:'absolute', backgroundColor:'rgba(0,0,0,0.8)', borderRadius:50
                }}>
                    <Ionicons name="close-outline" size={20} color='#c7417b' style={{padding:5}}/>
                </TouchableOpacity>

                <Text style={{...styles.textHeader, fontSize:15}}>Qual seu nome?</Text>
                <TextInput 
                    style={{height:40, width:'100%', borderColor:'#ccc', borderWidth:1, marginBottom:20, borderRadius:10}} 
                    multiline={true} numberOfLines={4} onChangeText={(text)=>setNome(text)} value={nome}
                ></TextInput>

                <Text style={{...styles.textHeader, fontSize:15}}>Qual sua mensagem?</Text>
                <TextInput 
                    style={{height:90, width:'100%', borderColor:'#ccc', borderWidth:1, marginBottom:20, borderRadius:10}} 
                    multiline={true} numberOfLines={4} onChangeText={(text)=>setMensagem(text)} value={mensagem}
                ></TextInput>

                <TouchableOpacity 
                    onPress={()=>enviarMensagem()} 
                    style={{backgroundColor:'rgba(26, 26, 26,1)', borderRadius:50, right:20, bottom:20, position:'absolute'
                }}>
                    <Ionicons name="rocket-outline" size={34} color='#c7417b' style={{padding:10}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    modalParent:{
      position:'absolute',
      left:0,
      top:0,
      width:'100%',
      height:'100%',
      backgroundColor:'rgba(0,0,0,0.6)',
      zIndex:1
    },
    boxModal:{
      backgroundColor:'white',
      width:'90%',
      height:'70%',
      left:0,
      top:90,
      padding:10,
      borderRadius:15,
      alignSelf:'center'
    }
  })