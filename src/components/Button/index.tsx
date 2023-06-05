import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export default function Button({
  title,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      {isLoading ? <S.Loading /> : <S.Title>{title}</S.Title>}
    </S.Container>
  )
}
