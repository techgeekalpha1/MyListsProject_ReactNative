import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { color,font } from '../Helpers/Constant';
import { BUILD_NO } from '../../config/Config';

function Footer(): React.JSX.Element {
    return(
        <View style={styles.footer}>
          <View style={styles.footerCredit}>
            <Text style={styles.footerPoweredByText}>Powered By : </Text>
            <Text style={styles.footerCompanyName}>Vaibhav Madan</Text>
          </View>
          <View style={styles.footerCredit}>
            <Text style={styles.footerBuildOn}>
              Build On : {BUILD_NO}
            </Text>
          </View>
        </View>

    );
};

const styles = StyleSheet.create({
    footer:{
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:10,
      gap:5,
    },
    footerFlagImg:{
      height:20,
      resizeMode:'center',
    },
    footerCredit:{
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
    },
    footerPoweredByText:{
      fontFamily:font.medium,
      color:color.blue100,
    },
    footerCompanyName:{
      fontFamily:font.semiBold,
      color:color.blue100,
    },
    footerBuildOn:{
      fontFamily:font.medium,
      color:color.blue100,
    },
});

export default Footer;