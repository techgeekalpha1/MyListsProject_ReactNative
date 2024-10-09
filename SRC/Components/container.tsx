import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    ImageBackground,
    StyleSheet,
    StatusBarStyle,

} from 'react-native';
import type {PropsWithChildren} from 'react';

type ContainerProps = PropsWithChildren<{
    statusBarStyle?: StatusBarStyle;
    bgImage: string;
  }>;

function Container({children, statusBarStyle, bgImage}: ContainerProps): React.JSX.Element {
  return ( 
    <SafeAreaView style={styles.root}>
      <StatusBar
              barStyle={statusBarStyle || 'dark-content'}
              translucent
              backgroundColor="transparent"/>  
      <ImageBackground 
          style={styles.root}
          source={bgImage || require('../Assests/Images/LaunchScreenBg.jpg')}>

          {children}

      </ImageBackground>   
    </SafeAreaView>
  );
};
  
const styles = StyleSheet.create({
    root:{
      flex:1,
      height:'100%',
      width:'100%',
      resizeMode:'center',
    },
});

export default Container;