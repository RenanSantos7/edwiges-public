import { styled } from 'styled-components';

interface FlexLineProps {
    gap?: number | string,
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline'
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
}

const FlexLine = styled.div<FlexLineProps>`
    display: flex;
    flex-flow: row wrap;
    gap: ${({ gap }) => gap ? gap : '1rem' };
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center' };
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start' };
`;

export default FlexLine