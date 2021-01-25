import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Destinations from './screens/Destinations';
import Destination from './screens/Destination';

import SettingScreen from './screens/Setting';

import History from "./screens/setting/History";
import DisplayOptions from "./screens/setting/DisplayOptions";
import PersonalInfomation from "./screens/setting/PersonalInformation";
import Security from "./screens/setting/Security";

import HotDestinationScreen from './screens/HotDestination';

const DestinationStack = createStackNavigator({
      Destinations,
      Destination
    }
);
DestinationStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Ionicons name='home-outline' size = {24} color='blue'/>
}
const HotDestinationStack = createStackNavigator({
    HotDestinationScreen
})
HotDestinationStack.navigationOptions = {
    tabBarLabel: 'Hot',
    tabBarIcon: <Ionicons name='flame-outline' size = {24} color='orange'/>
}
const SettingStack = createStackNavigator({
    SettingScreen,
    History,
    DisplayOptions,
    Security,
    PersonalInfomation
})
SettingStack.navigationOptions = {
    tabBarLabel: 'Cài đặt',
    tabBarIcon: <Ionicons name='settings-outline' size = {24} color='gray'/>
}
const AppNavigator = createBottomTabNavigator({
    DestinationStack,
    HotDestinationStack,
    SettingStack
})
export default AppNavigator;