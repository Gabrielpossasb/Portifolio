import * as React from 'react';
import {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as WebBrowser from 'expo-web-browser';
import Modal from './Modal.js';


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
//LogBox.ignoreAllLogs();//Ignore all log notifications

function HomeScreen({navigation}) {
  return (
    <View style={{padding:15,flex:1}}>
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

function SobreScreen({navigation}) {

  const [showModal, setShowModal] = useState(false);


  const abrirModalContato = () =>{
    setShowModal(!showModal);
  }


  return (
    <View style={{flex:1,}}>
      {
        (showModal)?
          <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        :
          <View></View>
      }

      <View style={{flex:1, padding:10}}>
        <ScrollView contentContainerStyle={{padding:20}} style={styles.container}>
          
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:28, marginTop:10}}>Gabriel Abraão Possas Borges</Text>
            <Image style={{width:250, height:250, marginTop:20, alignContent:'center'}} source={require('./assets/Screenshot_2.png')}></Image>
          </View>
          <View>
            
            <Text style={{fontSize:18, marginTop:20}}>
              variatio of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Text>
          </View>

        </ScrollView>

        <View style={{justifyContent:'flex-end', width:'100%'}}>
          <TouchableOpacity onPress={()=>abrirModalContato()} style={{backgroundColor:'#5f5380'}}>
            <Text style={{textAlign:'center', color:'rgb(240,240,240)', padding:10, fontSize:20}}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function PortifolioScreen({navigation}) {
  const [images, setImages] = useState([
    {
      img: require('./assets/Screenshot_1.png'),
      width:0,
      height:0,
      ratio:0,
      website:'https://cursos.dankicode.com'
    },
    {
      img: require('./assets/Screenshot_2.png'),
      width:0,
      height:0,
      ratio:0,
      website:'https://cursos.dankicode.com'
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
        <Text style={styles.textHeader}>Os últimos projetos!</Text>
        
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Portifolio') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Sobre'){
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Portifolio" component={PortifolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
