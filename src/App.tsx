/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import useAuth from 'hooks/useAuth';
import HomeScreen from 'screens/HomeScreen';
import LandingScreen from 'screens/LandingScreen';
import SignInScreen from 'screens/SignInScreen';
import SignUpScreen from 'screens/SignUpScreen';
import FormUserScreen from 'screens/FormUserScreen';
import ProductListHeader from 'components/header/ProductListHeader';
import ProfileScreen from 'screens/ProfileScreen';
import HomeHeader from 'components/header/HomeHeader';
import ProductDetailScreen from 'screens/ProductDetailScreen';
import SearchScreen from 'screens/SearchScreen';
import ProductListScreen from 'screens/ProductListScreen';
import SetUpAccountScreen from 'screens/SetUpAccountScreen';
import ChangeProfileScreen from 'screens/ChangeProfileScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: '',
          headerShown: true,
        }}>
        {user ? (
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                header: ({navigation}) => (
                  <HomeHeader navigation={navigation} />
                ),
              }}
            />
            <Stack.Screen
              name="Search Product"
              component={SearchScreen}
              options={({route}) => ({
                headerTitle: route.params?.name,
              })}
            />
            <Stack.Screen
              name="Product List"
              component={ProductListScreen}
              options={{
                header: () => <ProductListHeader />,
              }}
            />
            <Stack.Screen
              name="Product Detail"
              component={ProductDetailScreen}
              // options={{
              //   headerTitle: () => <ProductListHeader />,
              // }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={({route}) => ({
                title: route.params?.name,
              })}
            />
            <Stack.Screen
              name="SetUpAccount"
              component={SetUpAccountScreen}
              options={({route}) => ({
                title: route.params?.name,
              })}
            />
            <Stack.Screen
              name="ChangeProfile"
              component={ChangeProfileScreen}
              options={({route}) => ({
                title: route.params?.name,
              })}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUpScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Sign In"
              component={SignInScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Form User"
              component={FormUserScreen}
              // options={{
              //   headerRight: () => ({}),
              // }}
            />
          </Stack.Group>
        )}
        {/* Common modal screens */}
        {/* <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Invite" component={Invite} />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
