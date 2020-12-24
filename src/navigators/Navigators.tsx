import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import DetailTask from '../screens/Home/DetailTask';
import CreateTask from '../screens/Home/CreateTask';
import Profile from '../screens/Profile/Profile';
import DetailChartProfile from '../screens/Profile/DetailChartProfile';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigators() {
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="DetailTask" component={DetailTask} />
        <HomeStack.Screen name="CreateTask" component={CreateTask} />
      </HomeStack.Navigator>
    );
  }
  function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen
          name="DetailChartProfile"
          component={DetailChartProfile}
        />
      </ProfileStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
