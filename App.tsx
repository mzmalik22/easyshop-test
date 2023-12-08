import React from 'react'
import { LogBox } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RootNavigator } from '@navigation'
import { Provider } from 'react-redux'
import store from '@store'

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native'])

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigator />
      </GestureHandlerRootView>
    </Provider>
  )
}
