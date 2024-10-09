import react, { Children, PropsWithChildren } from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { font } from '../Helpers/Constant';

type MyTextProps = PropsWithChildren<{
    style?:any;
    noOfLines?: number
}>;

function MyText({children,style,noOfLines} : MyTextProps):React.JSX.Element{
    return(
        <Text
            numberOfLines={noOfLines}
            style={{...styles.text, ...style}}>
                {children}

        </Text>

    );
}

const styles = StyleSheet.create({
    text:{
        fontFamily:font.Regular,
    }
});

export default MyText;
