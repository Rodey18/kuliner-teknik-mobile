import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {CHECKBOX, COLOR, CONTAINER} from 'constants/theme';

type CheckListProps = {
  isChecked: boolean;
  handleCheck: () => void;
};
const CustomChecklist = (props: CheckListProps) => {
  return (
    <>
      {props.isChecked === true ? (
        <View
          style={[CHECKBOX.active, CONTAINER.flexbox]}
          onTouchEnd={props.handleCheck}>
          <Icon name="check" size={12} color={COLOR.color60} />
        </View>
      ) : (
        <View style={CHECKBOX.off} onTouchEnd={props.handleCheck}>
          {}
        </View>
      )}
    </>
  );
};

export default CustomChecklist;

const styles = StyleSheet.create({});
