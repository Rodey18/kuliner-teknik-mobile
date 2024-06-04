import React, {Suspense} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import useAuth from 'hooks/useAuth';
import HomeStackScreen from 'navigation/navigationContainer/HomeStackScreen';
import AuthStackScreen from 'navigation/navigationContainer/AuthStackScreen';

function App(): React.JSX.Element {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        {user ? <HomeStackScreen /> : <AuthStackScreen />}
      </Suspense>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
