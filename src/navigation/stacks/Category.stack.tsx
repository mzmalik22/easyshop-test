import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CategoryScreen } from '@screens'

const Stack = createStackNavigator()

const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CategoryScreen">
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  )
}
export { CategoryStack }
