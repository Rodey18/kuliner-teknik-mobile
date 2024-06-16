import React, {useCallback} from 'react';
import {Pressable, Alert, Linking, StyleSheet} from 'react-native';

type OpenURLButtonProps = {
  url: string;
  children: any;
  styles?: any;
};

const OpenURLButton = ({url, children, styles}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress} style={styles}>
      {children}
    </Pressable>
  );
};

export default OpenURLButton;
