import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
    background-color: ${({primary})=> primary ? 'lightblue' : 'red'};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 5px;
`

const Icon = (props) => {
    const { primary } = props;
    return (
        <StyledIcon primary={primary}/>
    )
}

export default Icon