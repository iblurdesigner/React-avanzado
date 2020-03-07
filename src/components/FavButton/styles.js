import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    width: 100%;
    padding: 15px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    & svg {
        margin-right: 4px;
        color: #d1d1d1;
        ${props => props.liked && css`
            {
                ${fadeIn({ time: '.7s' })}
                color: red;
            }
        `}
    }
`
