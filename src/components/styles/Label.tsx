import { styled } from 'styled-components';

interface StyledLabelProps {
    $erro?: boolean;
}

interface LabelProps {
    texto: string;
    obrigatorio?: boolean;
    erro?: boolean;
}

const StyledLabel = styled.span<StyledLabelProps>`
    font-weight: 600;
    color: ${props => props.$erro ? 'var(--perigo)' : 'unset'}
`;

export default function Label(props: LabelProps) {
    return (
        <StyledLabel>
            {props.texto}
            {props.obrigatorio && ' *'}
        </StyledLabel>
    )
};