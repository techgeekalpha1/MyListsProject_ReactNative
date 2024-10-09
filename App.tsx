import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import Container from './SRC/Components/container';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import Footer from './SRC/Components/footer';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './SRC/Screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import ShopListsScreen from './SRC/Screens/shopListScreen';


interface launchScreenBgNav{
  navigation:any;
};

function LaunchScreenBg(props: launchScreenBgNav): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigation = useNavigation(); 

  const homeScreen = () => props.navigation.navigate('homeScreen');

  return (
    
    <Container
      statusBarStyle='dark-content'
      bgImage={require('./SRC/Assests/Images/LaunchScreenBg.jpg')}>
        <TouchableOpacity
        style={styles.TouchView}
        onPress={homeScreen}>
          <View style={{flex:1,justifyContent:"flex-end"}}>
            <Footer/>
          </View> 
        </TouchableOpacity>
    </Container>  
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreenBg} />
        <Stack.Screen name="homeScreen" component={HomeScreen}/>
        <Stack.Screen name="shopListsScreen" component={ShopListsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  const styles = StyleSheet.create({
    TouchView:{
      height:'100%',
      width:'100%',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    }
});

export default App;