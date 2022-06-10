import * as React from 'react';
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { navigationRef } from './RootNavigation.js';
import * as RootNavigation from './RootNavigation.js'
//import * as WebBrowser from 'expo-web-browser';

import Sobre from './sobreScreen.js';
import Projetos from './projetosScreen.js';
import Home from './homeScreen.js';



import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
//LogBox.ignoreAllLogs();//Ignore all log notifications

function HomeScreen({navigation}) {

  return (
    <View style={{flex:1}}>
      <Home></Home>
    </View>
  );
}

function SobreScreen({navigation}) {

  return (
    <View style={{flex:1}}>

      <Sobre></Sobre>   
               
    </View>
  );
}

function ProjetosScreen({navigation}) {

  return (
    <View style={{flex:1}}>
      <Projetos></Projetos>
    </View>
  );
}

function FormacaoScreen({navigation}) {
  return(
    <View>

    </View>
  );
}

//const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular, BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        
        useLegacyImplementation={true}
        initialRouteName='Home'
        //defaultStatus={'open'}
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Projetos') {
              iconName = focused ? 'folder-open-outline' : 'folder-open-outline';
            } else if (route.name === 'Sobre'){
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle';
            } else if (route.name === 'Formacao'){
              iconName = focused ? 'school-outline' : 'school-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          drawerActiveTintColor: 'tomato',
          drawerInactiveTintColor: 'gray',
          drawerPosition: 'right',
          headerTitleAlign:'center',
                 
          
          headerRight:() => 
          <TouchableOpacity onPress={() => RootNavigation.navigate('Home')} style={{marginRight:10}}>
            <Ionicons name='chevron-back-circle-outline' color='black' size={30}/>
          </TouchableOpacity>
          ,
          
          headerStyle: {height:50}
          
          //headerShown:false
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{ title: 'Home', 
          
        }}/>
        <Drawer.Screen name="Sobre" component={SobreScreen} options={{ title: 'Sobre' , 
          
        }}/>
        <Drawer.Screen name="Projetos" component={ProjetosScreen} options={{ title: 'Projetos',
          
        }} />
        <Drawer.Screen name="Formacao" component={FormacaoScreen} options={{ title: 'Formação',
          
        }} />
      </Drawer.Navigator>

    
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
  },
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


/*
      {
        (showModal)?
          <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        :
          <View></View>
      }






      <LinearGradient
        colors={['#57595C', '#16384e']}
        style={{left:0, right:0, top:0, position:'absolute', height:'100%'}}
      />
*/