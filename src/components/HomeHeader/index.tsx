import { TouchableOpacity } from 'react-native'
import { Power } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useUser, useApp } from '@realm/react'

import * as S from './styles'

export default function HomeHeader() {
  const theme = useTheme()
  const user = useUser()
  const app = useApp()

  function handleLogout() {
    app.currentUser?.logOut()
  }

  return (
    <S.Container>
      <S.Picture
        source={{ uri: user?.profile.pictureUrl }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />

      <S.Greeting>
        <S.Message>Olá</S.Message>
        <S.Name>{user?.profile.name}</S.Name>
      </S.Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </S.Container>
  )
}
