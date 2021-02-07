import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import {Tasks, DetailTask, Profile, DetailAccount} from '../screens';
import {TabBarAdvancedButton} from '../components/common';
import {blueColor} from '../assets/styles';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigators() {
  function TaskStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Tasks" component={Tasks} />
        <HomeStack.Screen name="DetailTask" component={DetailTask} />
      </HomeStack.Navigator>
    );
  }
  function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator screenOptions={{headerShown: false}}>
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="DetailAccount" component={DetailAccount} />
      </ProfileStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: blueColor,
          inactiveTintColor: '#3E3F45',
          showLabel: false,
          style: styles.navigator,
          tabStyle: {
            backgroundColor: 'white',
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Task') {
              return <Feather name="list" color={color} size={size} />;
            } else if (route.name === 'Profile') {
              return <Feather name="user" color={color} size={size} />;
            }
          },
        })}
        tabBar={(props) => (
          <View style={styles.navigatorContainer}>
            <BottomTabBar {...props} />
          </View>
        )}>
        <Tab.Screen name="Task" component={TaskStackScreen} />
        <Tab.Screen
          name="Add"
          component={DetailTask}
          options={{
            tabBarButton: (props) => (
              <TabBarAdvancedButton bgColor={'white'} {...props} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
});
