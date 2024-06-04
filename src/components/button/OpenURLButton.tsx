import React, {useCallback} from 'react';
import {Pressable, Alert, Linking, StyleSheet} from 'react-native';

type OpenURLButtonProps = {
  url: string;
  children: any;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const link = `https://www.google.com/maps/search/${url}`;
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress} style={styles.buttonContainer}>
      {children}
    </Pressable>
  );
};

export default OpenURLButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    height: '100%',
  },
});
