import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from 'screens/(welcome)/LandingScreen';
import SignUpScreen from 'screens/(welcome)/SignUpScreen';
import SignInScreen from 'screens/(welcome)/SignInScreen';
import FormUserScreen from 'screens/(welcome)/FormUserScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, View} from 'react-native';

const AuthStackScreen = () => {
  const AuthStack = createNativeStackNavigator();
  const [initialRoute, setInitialRoute] = useState('');
  const [isCheckingLogin, setIsCheckingLogin] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        console.log('isLoggedIn from AsyncStorage:', isLoggedIn);
        setInitialRoute(isLoggedIn === 'true' ? 'Sign In' : 'Landing');
      } catch (error) {
        console.error(
          'Failed to fetch the login status from AsyncStorage',
          error,
        );
        setInitialRoute('Landing');
      } finally {
        setIsCheckingLogin(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isCheckingLogin) {
    // Show a loading spinner while checking AsyncStorage
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <AuthStack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Landing" component={LandingScreen} />
      <AuthStack.Screen name="Sign In" component={SignInScreen} />
      <AuthStack.Screen name="Sign Up" component={SignUpScreen} />
      <AuthStack.Screen name="Form User" component={FormUserScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
