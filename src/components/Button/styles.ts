import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    align-items: center;
    justify-content: center;

    background-color: ${theme.COLORS.BRAND_MID};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE
}))``
