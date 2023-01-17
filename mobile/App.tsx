/* eslint-disable camelcase */
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import {
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'
import store, { persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  })

  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <PersistGate persistor={persistor} loading={<Loading />}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </PersistGate>
    </Provider>
  )
}
