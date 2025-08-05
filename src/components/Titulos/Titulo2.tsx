import { styled } from 'styled-components'
import TituloProps from './TituloTypes.ts'

const StyledTitle = styled.h2`
    font-size: 2rem;
	font-weight: 400;
	margin-bottom: 2rem;
`

export default function Titulo2({children, style} : TituloProps) {
    return (
        <StyledTitle style={style}>
            {children}
        </StyledTitle>
    )
}
