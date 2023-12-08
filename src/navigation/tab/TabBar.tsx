import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextBold } from '@components'
import { CategoryIcon, HeartIcon, HomeIcon, MenuIcon } from '@assets/svg'
import { Colors } from '@styles'

const { width } = Dimensions.get('window')
const MARGIN = 0
const TAB_BAR_WIDTH = width
const TAB_WIDTH = TAB_BAR_WIDTH / 4

const BottomTabBar = ({ state, descriptors, navigation }) => {
  const [translateX] = useState(new Animated.Value(0))

  const translateTab = index => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    translateTab(state.index)
  }, [state.index])

  return (
    <View style={[styles.tabBarContainer]}>
      <View style={[styles.slidingTabContainer]}>
        <Animated.View
          style={[styles.slidingTab, { transform: [{ translateX }] }]}
        />
      </View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center' }}>
            <TabIcon label={label} isFocused={isFocused} index={state.index} />
            {!isFocused && <TextBold style={styles.tabText}>{label}</TextBold>}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const TabIcon = ({ label, isFocused, index }) => {
  const [translateY] = useState(new Animated.Value(0))

  const translateIcon = val => {
    Animated.spring(translateY, {
      toValue: val,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    if (isFocused) {
      translateIcon(heightPercentageToDP(-2.7))
    } else {
      translateIcon(0)
    }
  }, [index])

  if (label === 'Home') {
    return (
      <Animated.View style={{ transform: [{ translateY }] }}>
        <HomeIcon isFocused={isFocused} />
      </Animated.View>
    )
  }
  if (label === 'Categories') {
    return (
      <Animated.View style={{ transform: [{ translateY }] }}>
        <CategoryIcon isFocused={isFocused} />
      </Animated.View>
    )
  }
  if (label === 'Favorite') {
    return (
      <Animated.View style={{ transform: [{ translateY }] }}>
        <HeartIcon isFocused={isFocused} />
      </Animated.View>
    )
  }
  if (label === 'More') {
    return (
      <Animated.View style={{ transform: [{ translateY }] }}>
        <MenuIcon isFocused={isFocused} />
      </Animated.View>
    )
  }
}

export default BottomTabBar

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: heightPercentageToDP(10),
    paddingBottom: heightPercentageToDP(2.5),
    width: TAB_BAR_WIDTH,
    position: 'absolute',
    alignSelf: 'center',
    bottom: MARGIN,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.bottomTabBackground,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabText: {
    color: Colors.bottomTabText,
    fontSize: RFValue(10),
    lineHeight: heightPercentageToDP(2.5),
  },
  TabBarIcon: {
    borderRadius: RFValue(70),
    height: RFValue(70),
    width: RFValue(70),
    borderWidth: 6,
  },
  slidingTabContainer: {
    width: TAB_WIDTH,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
    alignItems: 'center',
  },
  slidingTab: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),
    backgroundColor: Colors.activeBottomTabBackground,
    bottom: RFValue(22),
    borderWidth: 4,
    borderColor: '#fff',
  },
})
