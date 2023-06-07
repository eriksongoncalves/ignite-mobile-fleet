import { TouchableOpacity } from 'react-native'
import { Power } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import * as S from './styles'

export default function HomeHeader() {
  const theme = useTheme()

  return (
    <S.Container>
      <S.Picture
        source={{ uri: 'https://github.com/eriksongoncalves.png' }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />

      <S.Greeting>
        <S.Message>Olá</S.Message>
        <S.Name>Erikson</S.Name>
      </S.Greeting>

      <TouchableOpacity>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </S.Container>
  )
}
