import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Title = styled.h1`
    color: #aaecf0;
`
const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
`


const Learn1 = () => {
    return (
        <>
        <h1>Hello world!</h1>
        <Section>
            <Title>💅🏻 Section</Title>
            <Button primary text="First Button"/>
            <Button text="Second Button"/>
        </Section>
        </>
    )
}

export default Learn1