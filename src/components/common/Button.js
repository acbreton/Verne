import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({icon, color, size, style, onPress}) => {

    return (
      <TouchableOpacity onPress={onPress}>
          <View>
              <Icon style={style} name={icon} size={size} color={color}/>
          </View>
      </TouchableOpacity>
    );

};

export default Button;

export { Button };