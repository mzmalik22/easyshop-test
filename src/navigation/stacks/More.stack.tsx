import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MoreScreen } from '@screens'

const Stack = createStackNavigator()

const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MoreScreen">
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
    </Stack.Navigator>
  )
}
export { MoreStack }
