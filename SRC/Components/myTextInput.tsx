import react, { useState } from 'react';
import { View,ViewStyle, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { color,font } from '../Helpers/Constant';

interface MyTextInputProps {
    mtiLabel: string;
    isError:boolean;
    placeHolder:string;
    name:string;
    value?:string;
    changeTextHandler?:(((text: string) => void) & Function);
    blurTextHandler?:any;
    focusHandler?:any;
    keyboardType?:KeyboardTypeOptions;
    passwordField?:boolean;
    rightIcon?:string;
    isEditable?:boolean;
    isMultiLine?:boolean;
    style?: ViewStyle;


};

const MyTextInput : React.FC< MyTextInputProps> = ({
    mtiLabel,
    isError,
    placeHolder, 
    name, 
    value, 
    keyboardType, 
    passwordField, 
    rightIcon, 
    isEditable, 
    isMultiLine,
    style,
    changeTextHandler=()=>{},
    blurTextHandler=()=>{},
    focusHandler=()=>{}}) => {
        const [togglePassword, setTogglePassword] = useState(true);

        const togglePasswordHandler = () =>{
            setTogglePassword(!togglePassword);
        };

        return (
            <View style={styles.formGroup}>
                <TextInput
                    label={mtiLabel}
                    error={isError}
                    placeholder={placeHolder}
                    keyboardType= {keyboardType}
                    // name={name}
                    // passwordField={passwordField}
                    // rightIcon={rightIcon}
                    editable={isEditable}
                    style={[styles.formControl,{height : isMultiLine ? 90 : undefined}]}
                    multiline={isMultiLine}
                    onChangeText={text =>{
                        changeTextHandler(text);
                    }}
                    secureTextEntry={passwordField? togglePassword : false}
                    theme={{
                        colors: {
                            primary:color.black500,
                        },
                        fonts: {
                            bodyLarge: {
                                fontFamily:font.medium 
                            }
                        }
                    }}
                    onBlur={ text => {
                        blurTextHandler(text);

                    }}
                    onFocus={ () => {
                        focusHandler();}
                    }
                    
                    value={value}
                 />
            </View>
          );
};

const styles = StyleSheet.create({
    formGroup:{
        justifyContent:'center',
        marginBottom:25,
        fontSize: 24,
    },
    formControl:{
        backgroundColor: 'transparent',
        fontFamily:font.Regular,
        color:color.black,
        position:'relative',
        fontSize: 13,
        padding: 0,
        margin: 0,
    },
});

export default MyTextInput; 