import {StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import {COLOR} from 'constants/theme';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

type Icon = {
  icon: string;
  size: number;
  isSolid: boolean;
  onPress?: () => any;
  color?: string;
  isButton: boolean;
};

const IconContainer: React.FC<Icon> = (props: Icon) => {
  return (
    <>
      {props.isButton === true ? (
        <TouchableHighlight
          onPress={props.onPress}
          style={styles.button}
          underlayColor={COLOR.line}>
          <FontAwesome6Icon
            size={props.size}
            name={props.icon}
            solid={props.isSolid}
            color={props.color}
          />
        </TouchableHighlight>
      ) : (
        <TouchableHighlight onPress={props.onPress} underlayColor={COLOR.line}>
          <FontAwesome6Icon
            size={props.size}
            name={props.icon}
            solid={props.isSolid}
            color={props.color}
          />
        </TouchableHighlight>
      )}
    </>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  icon: {
    borderRadius: 100,
  },
  button: {
    backgroundColor: COLOR.color60,
    color: COLOR.color30,
    borderRadius: 100,
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
