import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../screens/Home/Home';
import DetailTask from '../screens/Home/DetailTask';
import CreateTask from '../screens/Home/CreateTask';
import Profile from '../screens/Profile/Profile';
import DetailChartProfile from '../screens/Profile/DetailChartProfile';
import {StyleSheet, View} from 'react-native';
import {TabBarAdvancedButton} from '../components/TabBarAdvancedButton';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigators() {
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="DetailTask" component={DetailTask} />
        <HomeStack.Screen name="CreateTask" component={CreateTask} />
      </HomeStack.Navigator>
    );
  }
  function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator screenOptions={{headerShown: false}}>
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
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#F5403B',
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
        <Tab.Screen name="Task" component={HomeStackScreen} />
        <Tab.Screen
          name="Add"
          component={CreateTask}
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
