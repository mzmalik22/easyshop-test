import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '@screens'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}
export { HomeStack }
