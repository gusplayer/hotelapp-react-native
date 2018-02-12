import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../screens/Home';
import ListHotels from '../screens/ListHotels';
import HotelDetail from '../screens/HotelDetail';

export const FeedNavigator = StackNavigator({
    ListHotels: {
        screen: ListHotels,
        navigationOptions: {
        title: 'ListHotels',
        header: null,
        },  
      },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null,
      },  
    },   
    HotelDetail: {
      screen: HotelDetail,
      navigationOptions: {        
        title: 'Detalles del Hotel',
      }, 
    },    
  },
  {
    initialRouteName: 'Home',
    
  }

);

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
    ListHotels: {
      screen: ListHotels,
      navigationOptions: {
        tabBarLabel: 'Hoteles',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },  
    },
    HotelDetail: {
        screen: HotelDetail,
        navigationOptions: {
          header: null,
          tabBarLabel: 'Details',
          tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },  
      },
  },
  {
    initialRouteName: 'Home',
  }
);