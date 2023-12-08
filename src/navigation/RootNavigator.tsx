import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationService } from '@utilities'
import { CartScreen, ProductDetailScreen } from '@screens'
import { BottomTab } from './tab/Bottom.tab'

const Tab = createBottomTabNavigator()
const ref: any = createNavigationContainerRef()

const RootNavigator: React.FC = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="BottomTab">
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
