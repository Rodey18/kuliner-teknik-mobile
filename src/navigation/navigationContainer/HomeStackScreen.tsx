/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from 'screens/(main-content)/ProfileScreen';
import ProductDetailScreen from 'screens/(main-content)/ProductDetailScreen';
import HomeHeader from 'components/header/HomeHeader';
import HomeScreen from 'screens/(main-content)/HomeScreen';
import SearchScreen from 'screens/(main-content)/SearchScreen';
import {COLOR} from 'constants/theme';
import ProductListScreen from 'screens/(main-content)/ProductListScreen';
import ChangeProfileScreen from 'screens/(main-content)/ChangeProfileScreen';
import SettingScreen from 'screens/(main-content)/SettingScreen';
import {Mitra} from 'utils/type';
import {MitraProvider} from 'stores/mitra/MitraContext';
import ReviewScreen from 'screens/(main-content)/ReviewScreen';

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  const [restaurants, setRestaurants] = useState<Mitra[]>([]);

  const fetchRestaurants = async () => {
    const data = restaurants;
    setRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurants();
  });

  return (
    <MitraProvider>
      <HomeStack.Navigator
        screenOptions={{
          headerTitle: '',
        }}
        initialRouteName="Home">
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: ({navigation}) => <HomeHeader navigation={navigation} />,
          }}
        />
        <HomeStack.Screen
          name="Search Product"
          component={SearchScreen}
          options={{
            headerTitle: 'Pencarian',
            headerTintColor: COLOR.color60,
            headerStyle: {
              backgroundColor: COLOR.color10,
            },
          }}
        />
        <HomeStack.Screen
          name="Product List"
          component={ProductListScreen}
          options={{
            headerTitle: 'Hasil Pencarian',
            headerTintColor: COLOR.color60,
            headerStyle: {
              backgroundColor: COLOR.color10,
            },
          }}
        />
        <HomeStack.Screen
          name="Product Detail"
          component={ProductDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Review"
          component={ReviewScreen}
          options={{headerTitle: 'Ulasan'}}
        />
        <HomeStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerTitle: 'Profil'}}
        />
        <HomeStack.Screen
          name="Change Profile"
          component={ChangeProfileScreen}
          options={{headerTitle: 'Ubah Profil'}}
        />
        <HomeStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{headerTitle: 'Atur Akun'}}
        />
      </HomeStack.Navigator>
    </MitraProvider>
  );
};

export default HomeStackScreen;
