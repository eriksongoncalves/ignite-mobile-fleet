import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { AppProvider, UserProvider } from '@realm/react'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import SignIn from './src/screens/SignIn'
import Home from './src/screens/Home'
import { theme } from './src/theme'
import { REALM_APP_ID } from '@env'
import Loading from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <UserProvider fallback={SignIn}>
          <Home />
        </UserProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
