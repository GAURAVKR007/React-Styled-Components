import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({primary}) => primary ? 'lightblue' : 'red'};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    flex-direction: column;
    border-radius: 15px;

    &:hover {
        background-color: grey;
    }

    .subText {
        font-size: 10px;
        color: orange;
    }
`


const Button = (props) => {
    return (
        <StyledButton primary={props.primary}>
            {props.text}
        <p className='subText'>Sub Text</p>
        </StyledButton>
    )
}

export default Button