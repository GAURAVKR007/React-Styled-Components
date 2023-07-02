import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
    background-color: ${({primary})=> primary ? 'lightblue' : 'red'};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 5px;
    margin-left: ${({status})=> {
        if (status === 'in-progress') return '70px';
        else if (status === 'complete') return '100px';
        else return '5px';
    }};
`

const Icon = (props) => {
    const { primary, status } = props;
    return (
        <StyledIcon primary={primary} status={status}/>
    )
}

export default Icon