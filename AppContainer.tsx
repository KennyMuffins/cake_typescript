import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/modules/accountmodules/AccountScreen'
import CourseCreateScreen from './src/modules/coursemodules/CourseCreateScreen'
import CourseDetailScreen from './src/modules/coursemodules/CourseDetailScreen'
import CourseListScreen from './src/modules/coursemodules/CourseListScreen'
import SignupScreen from './src/modules/accountmodules/SignupScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    courseListFlow: createStackNavigator({
      CourseList: CourseListScreen,
      CourseDetail: CourseDetailScreen
    }),
    CourseCreate: CourseCreateScreen,
    Account: AccountScreen
  })
})

export default createAppContainer(switchNavigator)