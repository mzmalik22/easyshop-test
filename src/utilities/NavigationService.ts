import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native'

// let _navigator
let navigator: any = createNavigationContainerRef()

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef
}

function navigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  )
}
function reset(routeName) {
  navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: routeName,
        },
        // { name: 'Home' },
      ],
    }),
  )
}

function goBack() {
  navigator.dispatch(CommonActions.goBack())
}
function setParams(params) {
  navigator.dispatch(CommonActions.setParams(params))
}

export default {
  navigator,
  navigate,
  setTopLevelNavigator,
  reset,
  goBack,
  setParams,
}
