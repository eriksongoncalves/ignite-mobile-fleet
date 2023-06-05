import * as S from './styles'
import bgImg from '../../assets/background.png'
import Button from '@components/Button'

export default function SignIn() {
  return (
    <S.Container source={bgImg}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Gestão de uso de veículos</S.Slogan>

      <S.ButtonContainer>
        <Button title="Entrar com Google" isLoading />
      </S.ButtonContainer>
    </S.Container>
  )
}
