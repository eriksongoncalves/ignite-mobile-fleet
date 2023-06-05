import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

import * as S from './styles'
import bgImg from '../../assets/background.png'
import Button from '@components/Button'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email']
  })

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
        fetch(
          `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.authentication.idToken}`
        )
          .then(res => res.json())
          .then(console.log)
      } else {
        Alert.alert('Não foi possível conectar-se a sua conta Google.')
      }
    }
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
