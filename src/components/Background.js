import React from 'react';
import { 
    StyleSheet, 
    View
  } from 'react-native';
import {colors} from '../common/theme'
export default class Background extends React.Component {
  render() {
    return (
      <View style={styles.imgBackground}>
        {this.props.children}
      </View>


      
    );
  }
}

//style for this component
const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 ,
    backgroundColor: colors.SKY
  },  
});
