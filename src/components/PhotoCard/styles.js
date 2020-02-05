import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    ${fadeIn()}
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`
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
export const Article = styled.article`
    min-height: 200px
`
