import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>


    </View>
  );
}

function SobreScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text>Sobre Screen</Text>
    </View>
  );
}

function PortifolioScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text>Portfolio Screen</Text>
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
            } else if (route.name === 'Portfolio') {
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
})
