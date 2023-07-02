import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({primary}) => primary ? 'lightblue' : 'red'};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
`


const Button = (props) => {
    return (
        <StyledButton primary={props.primary}>{props.text}</StyledButton>
    )
}

export default Button