import {
  InputModeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {COLOR, FONT} from 'constants/theme';

type customTextInputProps = {
  placeholder: string;
  text: string;
  setText: (text: string) => void;
  inputMode: InputModeOptions;
  isPassword: boolean;
  validate: (text: string) => {
    isValid: boolean;
    message: string;
  };
};

const CustomTextInput = (props: customTextInputProps) => {
  const [textError, setTextError] = useState('');

  const [showPassword, setShowPassword] = useState(props.isPassword);
  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword],
  );

  const handleOnChangeText = (inputText: string) => {
    props.setText(inputText);

    const error = props.validate(inputText);

    setTextError(error.message);
  };

  useEffect(() => {
    if (!textError) {
      setTextError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.text]);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder={props.placeholder}
          value={props.text}
          onChangeText={handleOnChangeText}
          style={styles.text}
          cursorColor={COLOR.color30}
          inputMode={props.inputMode}
          secureTextEntry={showPassword}
          autoCapitalize="none"
        />
        {props.isPassword && (
          <TouchableOpacity onPress={toggleShowPassword} style={styles.btnEye}>
            {showPassword ? (
              <Icon name="eye-slash" size={16} />
            ) : (
              <Icon name="eye" size={16} solid />
            )}
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.errorText}>{textError}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    ...FONT.identifier,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderBottomColor: COLOR.line,
    borderBottomWidth: 0.5,
    overflow: 'hidden',
    width: '100%',
  },
  btnEye: {
    position: 'absolute',
    right: 8,
  },
  errorText: {
    ...FONT.detail,
    color: COLOR.red,
  },
});

export default CustomTextInput;
