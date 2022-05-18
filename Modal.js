import * as React from 'react';
import {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { db } from './firebase.js';

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
            <View style={{position:'absolute', right:20, top:20, width:50, height:50, backgroundColor:'#fff', zIndex:2, justifyContent:'center', borderRadius:15}}>
                <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center'}} 
                    onPress={() => props.setShowModal(!props.showModal)}>
                    <Text style={{color:'black', textAlign:'center'}}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxModal}>
                <Text style={{...styles.textHeader, fontSize:15}}>Qual seu nome?</Text>
                <TextInput 
                    style={{height:40, width:'100%', borderColor:'#ccc', borderWidth:1, marginBottom:20}} 
                    multiline={true} numberOfLines={4} onChangeText={(text)=>setNome(text)} value={nome}
                ></TextInput>

                <Text style={{...styles.textHeader, fontSize:15}}>Qual sua mensagem?</Text>
                <TextInput 
                    style={{height:90, width:'100%', borderColor:'#ccc', borderWidth:1, marginBottom:20}} 
                    multiline={true} numberOfLines={4} onChangeText={(text)=>setMensagem(text)} value={mensagem}
                ></TextInput>

                <TouchableOpacity onPress={()=>enviarMensagem()} style={{backgroundColor:'#5f5380'}}>
                    <Text style={{textAlign:'center', color:'rgb(240,240,240)', padding:10, fontSize:20}}>Enviar</Text>
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
      height:370,
      width:'100%',
      position:'absolute',
      left:0,
      top:'50%',
      marginTop:-185,
      padding:10
    }
  })