import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Realm, useApp } from '@realm/react'

import * as S from './styles'
import bgImg from '../../assets/background.png'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import Button from '@components/Button'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email']
  })
  const app = useApp()

  function handleGoogleSignIn() {
    setIsAuthenticating(true)

    googleSignIn().then(res => {
      if (res.type !== 'success') {
        setIsAuthenticating(false)
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication?.idToken
        )

        app.logIn(credentials).catch(error => {
          // eslint-disable-next-line no-console
          console.log('>>> ', error)
          Alert.alert('Não foi possível conectar-se a sua conta Google.')
          setIsAuthenticating(false)
        })
      } else {
        Alert.alert('Não foi possível conectar-se a sua conta Google.')
        setIsAuthenticating(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  return (
    <S.Container source={bgImg}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Gestão de uso de veículos</S.Slogan>

      <S.ButtonContainer>
        <Button
          title="Entrar com Google"
          isLoading={isAuthenticating}
          onPress={handleGoogleSignIn}
        />
      </S.ButtonContainer>
    </S.Container>
  )
}
