import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FavoriteScreen } from '@screens'

const Stack = createStackNavigator()

const FavoriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="FavoriteScreen">
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  )
}
export { FavoriteStack }
