import * as S from './styles'

import Button from '@components/Button'
import bgImg from '../../assets/background.png'

export default function SignIn() {
  return (
    <S.Container source={bgImg}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Gestão de uso de veículos</S.Slogan>

      <S.ButtonContainer>
        <Button title="Entrar com Google" />
      </S.ButtonContainer>
    </S.Container>
  )
}
