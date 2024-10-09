import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Container from '../Components/container';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { font } from '../Helpers/Constant';
import TodoShopList from '../Components/mytodoshoppingList';


const image = require('D:/Projects/SwagBox/GuiApps/MobileClient/src/assets/images/gradient 01.png');
const { width, height } = Dimensions.get('window');

interface TestScreenNav{
    navigation:any;
  };

function ShopListsScreen(props: TestScreenNav): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const homeScreen = () => props.navigation.navigate('homeScreen');

  return (
    <Container
      statusBarStyle='dark-content'
      bgImage={require('../Assests/Images/ListsScreen.jpg')}>
        <View style={styles.PageView}> 
          <TodoShopList/> 
        </View>
        <View
        style = {styles.bottomNav}
        >
          <ImageBackground
          source={require('../Assests/Images/bottomimg.png')} resizeMode='cover' style={styles.bottomNavimg}>
            <TouchableOpacity
            onPress={homeScreen}>
            <Image
              source={require('../Assests/Icons/home.jpg')
            } style={styles.img1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
             source={require('../Assests/Icons/shopList.jpg')}
             style={styles.img}></Image>
          </TouchableOpacity>
        </ImageBackground>
        </View>
    </Container>
  );
}

const styles = StyleSheet.create({
bottomNav:{
    height:50,
    width:'100%',
},

bottomNavimg:{
  flexDirection:'row',
  width:'100%',
  justifyContent:'space-around'
},
img:{
  alignSelf:'center',
  height:50,
  width:50,
  marginTop:3,
    
},
img1:{
  resizeMode:'cover',
  height:50,
  width:50},
    
  PageView:{
    height:'100%',
    width:'100%',
    flex:1,
  },
  CompanyLogo:{
    marginTop:120,
    alignSelf:'center',
  },
  PageHeaderView:{
    marginTop:10,
    flexDirection:'row',
    alignSelf:'center',
  },
  PageHeader:{
    marginTop:10,
    fontFamily:font.GreatVibesRegular,
    fontSize:48,
    alignSelf:'center',
  },
  EmailFeild:{
    marginTop:30,
  },
  PasswordFeild:{
    marginTop:200,
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
  },
});

export default ShopListsScreen;
