import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CategoryStack, FavoriteStack, HomeStack, MoreStack } from '../stacks'
import { HomeIcon, CategoryIcon, HeartIcon, MenuIcon } from '@assets/svg'
import BottomTabBar from './TabBar'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  const hide = false
  const tabs = [
    {
      id: 1,
      name: 'Home',
      label: 'Home',
      component: HomeStack,
      icon: HomeIcon,
    },
    {
      id: 2,
      name: 'Categories',
      label: 'Categories',
      component: CategoryStack,
      icon: CategoryIcon,
    },
    {
      id: 3,
      name: 'Favorite',
      label: 'Favorite',
      component: FavoriteStack,
      icon: HeartIcon,
    },
    {
      id: 3,
      name: 'More',
      label: 'More',
      component: MoreStack,
      icon: MenuIcon,
    },
  ]
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      initialRouteName={'Generate'}
      screenOptions={{
        headerShown: false,
      }}>
      {tabs.map((_, index) => {
        return (
          <Tab.Screen
            key={_.id}
            name={_.name}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarIcon: {
                icon: _.icon,
              },
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export { BottomTab }
