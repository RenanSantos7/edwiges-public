import { styled } from 'styled-components'
import TituloProps from './TituloTypes.ts'

const StyledTitle = styled.h4`
    font-size: 1.2rem;
	font-weight: 600;
	margin-block: 1rem;
`

export default function Titulo4({children, style} : TituloProps) {
    return (
        <StyledTitle style={style}>
            {children}
        </StyledTitle>
    )
}
